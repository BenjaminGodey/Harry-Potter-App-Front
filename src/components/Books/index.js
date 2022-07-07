// == Import NPM
import { useSelector } from "react-redux";

// == Import: local
import "./books.scss";
import CardBook from "../CardBook";

// == Composant
function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div className="books">
      {books.data.map((book) => (
        <CardBook key={book.id} {...book} />
      ))}
    </div>
  );
}

// == Export
export default Books;
