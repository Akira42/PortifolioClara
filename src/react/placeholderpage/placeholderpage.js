import './placeholderpage.scss';
import monkeyTyping from '../../assets/monkey-typing.gif';

function PlaceholderPage() {
  return (
    <main className="placeHolderPage">
      <h1>Site em construção</h1>

      <img src={monkeyTyping} alt="mamaco!!!!!!!" title="mamaco!!!!!!!!!" />
    </main>
  );
}

export default PlaceholderPage;
