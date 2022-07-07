// == Import: local
import platformTicket from "../../assets/img/platform_ticket.jpeg";
import ticket from "../../assets/img/img1.jpeg";
import platform from "../../assets/img/platform_wamm.jpeg";

//== Import: styles
import "./home.scss";
// == Composant

function Home() {
  return (
    <main className="main">
      <div className="main-up">
        <div className="main-up__img-container">
          <img className="main-up__img" src={platformTicket} alt="enveloppe" />
          <img className="main-up__img--hover" src={platform} alt="ticket" />
        </div>
        <div className="main-up__right">
          <p className="main-up__title">LET ME TELL YOU A WONDERFULL</p>
          <p className="main-up__titlespan">HISTORY</p>
        </div>
      </div>
      <div className="main-down">
        <div className="main-down__left">
          <h2 className="main-down__left__title">
            Do you believe in the magic of Christmas?
          </h2>
          <p className="main-down__left__content">
            Once upon a time, there lived a girl. She was pretty, formidable and
            very well surrounded. But something was missing in her life. It was
            like she ever knew she was a special kind of woman, as if she had
            magic in her. Christmas was around the corner, and she knew it was
            her time to receive her invitation to the Magic World. But before
            leave her whole life, she has to review some things and pass the
            test to prove she was worthy of this.
          </p>
        </div>
        <div className="main-down__right">
          <img className="main-down__right__img" src={ticket} alt="ticket" />
        </div>
      </div>
    </main>
  );
}

// == Export
export default Home;
