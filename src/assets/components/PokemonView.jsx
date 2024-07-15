import { useEffect, useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const PokemonView = () => {
  const {
    namePoke,
    ApiPath,
    pokeImagen,
    setPokeImagen,
    pokeStats,
    setPokeStats,
    pokeType,
    setPokeType,
  } = useContext(PokeContext);

  const newApiPath = ApiPath + namePoke;

  const consultaDetails = async () => {
    const peticionDetails = await fetch(newApiPath);
    const respuestaDetails = await peticionDetails.json();

    console.log(respuestaDetails);
    const foto = respuestaDetails.sprites.front_default;
    setPokeImagen(foto);
    const stats = respuestaDetails.stats;
    setPokeStats(stats);
    const type = respuestaDetails.types;
    setPokeType(type);
  };

  useEffect(() => {
    consultaDetails();
  }, []);

  return (
    <main className="d-flex justify-content-center">
      <section className="mx-0">
        <img src={pokeImagen} className="imagePokemon" alt="" />
      </section>
      <aside>
        <h2>{namePoke}</h2>

        {pokeStats.map((st, index) => (
          <ul key={index}>
            <li className="text-uppercase list-unstyled">
              {st.stat.name} : {st.base_stat}
            </li>
          </ul>
        ))}

        <h4>Tipo: </h4>
        {pokeType.map((ty, ind) => (
          <div>
            <p className="text-uppercase" key={ind}>
              {ty.type.name}
            </p>
          </div>
        ))}
      </aside>
    </main>
  );
};

export default PokemonView;
