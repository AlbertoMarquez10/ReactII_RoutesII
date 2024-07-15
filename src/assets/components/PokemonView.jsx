import { useEffect, useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const PokemonView = () => {
  const { namePoke, ApiPath, setPokeDetails, pokeDetails } =
    useContext(PokeContext);

  const newApiPath = ApiPath + namePoke;

  const consultaDetails = async () => {
    const peticionDetails = await fetch(newApiPath);
    const respuestaDetails = await peticionDetails.json();
    setPokeDetails(respuestaDetails);
    console.log(respuestaDetails);
  };

  useEffect(() => {
    consultaDetails();
  }, []);
  /*let claves = Object.keys(pokeDetails);
  console.log(claves);
  const newMap = pokeDetails.map((i)=>{
    return i
  })

  /*for (let clave in pokeDetails) {
    console.log(pokeDetails[clave.sprites]);
  }*/

  return (
    <main>
      <aside>
        <img src="" alt="" />

        <h2>{namePoke}</h2>
        <ul>
          <li></li>
        </ul>
      </aside>
    </main>
  );
};

export default PokemonView;
