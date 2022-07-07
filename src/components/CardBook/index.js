// == Import local
import "./cardbook.scss";

// == Composant

function CardBook({ title, description }) {
  return (
    <div className="book">
      <div className="back"></div>
      <div className="page6">
        <p className="book__summary">{description}</p>
      </div>
      <div className="page5"></div>
      <div className="page4"></div>
      <div className="page3"></div>
      <div className="page2"></div>
      <div className="page1"></div>
      <div className="front">
        <h1 className="book__title">{title}</h1>
      </div>
    </div>
  );
}

export default CardBook;
