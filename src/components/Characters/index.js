// == Import NPM
import { useSelector } from "react-redux";

// == Import: local
import "./characters.scss";
import Card from "../Card";
import Loading from "../Loading";

// == Composant
function Characters() {
  const characters = useSelector((state) => state.characters);
  const loading = useSelector((state) => state.charactersSettings.loading);

  // Show loading with spinner first, and after show characters.
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="characters">
        {characters.data.map((character) => (
          <Card key={character.nickname} {...character} />
        ))}
      </div>
    );
}

// == Export
export default Characters;
