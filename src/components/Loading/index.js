import "./loading.scss";
import magicWand from "../../assets/img/magic-wand.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  setToggleCharactersLoading,
  setSpinnerLoading,
} from "../../actions";

function Loading() {
  const dispatch = useDispatch();
  const spinnerLoading = useSelector((state) => state.spinnerLoading);
  // On click on the wand, start the animation (setSpinnerLoading) and fetch characters from API
  function handleClick() {
    dispatch(setSpinnerLoading());
    dispatch(fetchCharacters());
    setTimeout(() => {
      dispatch(setToggleCharactersLoading());
    }, 4000);
  }

  return (
    <div className="loading">
      <img
        src={magicWand}
        alt="magic wand"
        className={
          spinnerLoading ? "loading__img loading__img--loading" : "loading__img"
        }
        onClick={handleClick}
      />
    <div className="loading__call-to-action">
      <span className="loading__text-animation">C</span>
      <span className="loading__text-animation">l</span>
      <span className="loading__text-animation">i</span>
      <span className="loading__text-animation">c</span>
      <span className="loading__text-animation">k</span>
      <span className="loading__text-animation">&nbsp;</span>
      <span className="loading__text-animation">a</span>
      <span className="loading__text-animation">n</span>
      <span className="loading__text-animation">d</span>
      <span className="loading__text-animation">&nbsp;</span>
      <span className="loading__text-animation">l</span>
      <span className="loading__text-animation">e</span>
      <span className="loading__text-animation">t</span>
      <span className="loading__text-animation">&nbsp;</span>
      <span className="loading__text-animation">t</span>
      <span className="loading__text-animation">h</span>
      <span className="loading__text-animation">e</span>
      <span className="loading__text-animation">&nbsp;</span>
      <span className="loading__text-animation">M</span>
      <span className="loading__text-animation">a</span>
      <span className="loading__text-animation">g</span>
      <span className="loading__text-animation">i</span>
      <span className="loading__text-animation">c</span>
      <span className="loading__text-animation">&nbsp;</span>
      <span className="loading__text-animation">b</span>
      <span className="loading__text-animation">e</span>
      <span className="loading__text-animation">g</span>
      <span className="loading__text-animation">i</span>
      <span className="loading__text-animation">n</span>
      <span className="loading__text-animation">!</span>
    </div>
    </div>
  );
}

export default Loading;
