// == Import npm
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleQuizzNav } from '../../actions';

// == Import: local
import './nav.scss';


// == Composant
const Nav = () => {
  const quizz = useSelector((state) => state.quizz);
  const dispatch = useDispatch();
  function handleClick() {
   dispatch(setToggleQuizzNav());
  }
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink
            to="/"
            className={
              ({isActive}) => (isActive ? 'nav__item nav__item--active' : 'nav__item')
            }
          >
            Home
          </NavLink>
          </li>
          <li>
          <NavLink
              to="characters"
            className={
              ({isActive}) => (isActive ? 'nav__item nav__item--active' : 'nav__item')
            }
          >
            Characters
          </NavLink>
          </li>
          <li>
          <NavLink
            to="books"
            className={
              ({isActive}) => (isActive ? 'nav__item nav__item--active' : 'nav__item')
            }
          >
            Books
          </NavLink>
          </li>
          <li 
         // className='nav__item nav__item--quizz'
          className={quizz ? 'nav__item  nav__item--quizz' : 'nav__item nav__item--quizz--transition'}
         // {imageRotate ? 'main-up__img main-up__img--rotate' : 'main-up__img'}
          onClick={handleClick}>
          </li>

      </ul>
    </nav>
  );
};

// == Export
export default Nav;
