// == Import: npm
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// == Import composants
import Header from "..//Header";
import Nav from "../Nav";
import Home from "../Home";
import Characters from "../Characters";
import Books from "../Books";
import { fetchBooks } from "../../actions";

// == Import styles
import "./app.scss";

// == Composant
function App() {
  const dispatch = useDispatch();

  // At component mount, load books from API
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
