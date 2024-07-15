import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [pokeImagen, setPokeImagen] = useState("");
  const [pokeStats, setPokeStats] = useState([]);
  const [pokeType, setPokeType] = useState([]);
  const [namePoke, setNamePoke] = useState(selected);
  const navigate = useNavigate();

  const ApiPath = "https://pokeapi.co/api/v2/pokemon/";

  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    console.log(selected);
  };

  const viewDetails = (e) => {
    e.preventDefault();
    const newPokemon = selected;
    setNamePoke(newPokemon);
    if (selected === null) {
      console.log("seleciona un pokemon");
      return;
    }

    navigate(`/pokemones/${newPokemon}`);
  };

  const globalState = {
    pokeList,
    setPokeList,
    handleChange,
    viewDetails,
    selected,
    setPokeImagen,
    pokeImagen,
    namePoke,
    ApiPath,
    pokeStats,
    setPokeStats,
    pokeType,
    setPokeType,
  };

  return (
    <PokeContext.Provider value={globalState}>{children}</PokeContext.Provider>
  );
};
