import { useEffect, useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const Api = () => {
  const { setPokeList, ApiPath } = useContext(PokeContext);

  const consultarPokemon = async () => {
    const peticion = await fetch(ApiPath);
    const respuesta = await peticion.json();
    setPokeList(respuesta.results);
  };

  useEffect(() => {
    consultarPokemon();
  }, []);

  return <></>;
};

export default Api;
