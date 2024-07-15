import Pikachu from "../img/PikachuSVG.jpg";
const Welcome = () => {
  return (
    <main>
      <h1>Bienvenido Maestro Pokemón</h1>
      <img src={Pikachu} className="imageSize" />
    </main>
  );
};

export default Welcome;
