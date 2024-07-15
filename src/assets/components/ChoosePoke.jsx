import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

const ChoosePoke = () => {
  const { pokeList, handleChange, viewDetails } = useContext(PokeContext);

  return (
    <main>
      <h1>Selecciona un Pokemon</h1>
      <section>
        <Form.Select
          aria-label="Selecciona un pokemon"
          className="mb-3 text-center"
          onChange={handleChange}
        >
          <option>Pokemon</option>
          {pokeList.map((pokemon) => (
            <option value={pokemon.name} key={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>

        <Button variant="dark" onClick={viewDetails}>
          Ver Detalle
        </Button>
      </section>
    </main>
  );
};

export default ChoosePoke;
