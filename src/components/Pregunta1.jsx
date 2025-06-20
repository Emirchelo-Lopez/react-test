// ❓ Pregunta 1: Estado no reactivo
// 🧩 ¿Cuál es el error? ¿Qué pasa con count++? ¿Cómo lo corregirías?
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  return <button onClick={increment}>Count: {count}</button>;
}
