// == Import local
import "./card.scss";

// == Composant

function Card({ nickname, actor, image, house }) {
  return (
    <div className="card">
      <p className="card__title">WANTED</p>
      <img className="card__image" src={image} alt={nickname} />
      <p className="card__name">{nickname}</p>
      <ul className="card__list">
        <li className="card__element">House: {house}</li>
        <li className="card__element">Actor: {actor}</li>
      </ul>
    </div>
  );
}

export default Card;
