// ❓ Pregunta 4: Uso condicional de hooks
// 🧩 ¿Por qué esto está prohibido en React? ¿Cómo deberías reestructurarlo?
// El useEffect ya es una función condicional que se ejecutará cada vez que nombre cambia, no hace falta la estructura if-else

import { useEffect } from "react";

export default function Saludo({ nombre }) {
  useEffect(() => {
    console.log("Hola " + nombre);
  }, [nombre]);

  return <h1>Bienvenido {nombre}</h1>;
}
