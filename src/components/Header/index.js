// == Import: local
import "./header.scss";

// == Composant
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        The Daily <span className="header__goldletter">P</span>rophet
      </h1>
    </header>
  );
};

// == Export
export default Header;
