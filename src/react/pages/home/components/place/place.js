import { useEffect, useRef, useState } from "react";
import "./place.scss";

function Place() {
    
    const canvasRef = useRef(null);
    const canvasSize = [1000, 1000];
    const pixelSize = 25;
    const API_URL = "https://script.google.com/macros/s/AKfycby6S5TZFqRaF-eCiJfxbm8l6yTGZvFtKH1mdKTXLKTHWZe6wTAucpkp9c1XP2ONYF81_g/exec"; // From Apps Script deployment

    const [pixels, setPixels] = useState(
        Array.from({ length: canvasSize[1] / pixelSize }, () =>
            Array(canvasSize[0] / pixelSize).fill("lightgray")
        )
    );

    // Fetch saved pixels on load
    useEffect(() => {
        fetch(`${API_URL}?action=read`, {
            method: "GET",
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
            mode: "cors"
        })
            .then(res => res.json())
            .then(data => {
                const rows = canvasSize[1] / pixelSize;
                const cols = canvasSize[0] / pixelSize;

                const updatedPixels = Array.from({ length: rows }, () =>
                    Array(cols).fill("lightgray")
                );

                data.forEach(({ row, col, color }) => {
                    if (row < rows && col < cols) {
                        updatedPixels[row][col] = color;
                    }
                });

                setPixels(updatedPixels);
            });
    }, []);

    // Draw the grid
    const drawGrid = (ctx) => {
        for (let row = 0; row < pixels.length; row++) {
            for (let col = 0; col < pixels[row].length; col++) {
                ctx.fillStyle = pixels[row][col];
                ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        drawGrid(ctx);
    }, [pixels]);

    // Handle clicks
    const handleCanvasClick = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const col = Math.floor(x / pixelSize);
        const row = Math.floor(y / pixelSize);

        const newColor = pixels[row][col] === "lightgray" ? "red" : "lightgray";

        // Update state locally
        setPixels((prev) => {
            const newPixels = prev.map((rowArr) => [...rowArr]);
            newPixels[row][col] = newColor;
            return newPixels;
        });

        // Send update to Google Sheet
        fetch(`${API_URL}?action=write`, {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({ row, col, color: newColor }),
            mode: "cors"
        }).catch(console.error);

    };

    return (
        <canvas
            ref={canvasRef}
            width={canvasSize[0]}
            height={canvasSize[1]}
            style={{ border: "1px solid black", cursor: "pointer" }}
            onClick={handleCanvasClick}
        />
    );
}

export default Place;
