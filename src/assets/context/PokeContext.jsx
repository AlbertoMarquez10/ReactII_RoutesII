import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [pokeDetails, setPokeDetails] = useState({});
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
    setPokeDetails,
    pokeDetails,
    namePoke,
    ApiPath,
  };

  return (
    <PokeContext.Provider value={globalState}>{children}</PokeContext.Provider>
  );
};
