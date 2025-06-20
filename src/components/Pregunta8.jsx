// ❓ Pregunta 8: Consumo de PokéAPI con async/await y errores
// 🧩 ¿Qué error tiene el uso de useEffect aquí?
// Corrige el código para que funcione correctamente y explique por qué.

import { useState, useEffect } from "react";

function PokemonCard({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  const getPokemons = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getPokemons(id);
  }, [id]);

  if (error) return <p>Algo salió mal...</p>;
  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div style={{ border: "2px solid #f00", padding: 20, borderRadius: 10 }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width={150} />
      <p>
        Tipo:{" "}
        {pokemon.types && pokemon.types.length > 0
          ? pokemon.types[0].type.name
          : "Type not available"}
      </p>
      {/* ERROR: ¿Y si no tiene tipo? */}
      <p>
        Especie:{" "}
        {pokemon.species && pokemon.species.name
          ? pokemon.species.name
          : "Species not available"}
      </p>
      {/* ERROR: especies es un objeto anidado */}
    </div>
  );
}

export default PokemonCard;
