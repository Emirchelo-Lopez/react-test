// ❓ Pregunta 7: Renderizado infinito por efecto mal configurado
// 🧩 ¿Qué está causando que la app se trabe o entre en bucle infinito?
// ¿Cómo podrías evitarlo respetando la lógica?
// Con un timer es más que suficiente para que no se cicle

import { useState, useEffect } from "react";

export default function AutoIncrement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return <p>Count: {count}</p>;
}
