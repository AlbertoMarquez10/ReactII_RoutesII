import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./assets/views/Home";
import Pokemones from "./assets/views/Pokemones";
import Navbar from "./assets/components/Navbar";
import Api from "./assets/components/Api";
import DetallePokemon from "./assets/views/DetallePokemon";
import { Route, Routes } from "react-router-dom";
import { PokeProvider } from "./assets/context/PokeContext";

function App() {
  return (
    <>
      <PokeProvider>
        <Api />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:namePoke/" element={<DetallePokemon />} />
        </Routes>
      </PokeProvider>
    </>
  );
}

export default App;
