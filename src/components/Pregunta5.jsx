// ❓ Pregunta 5: Falta cleanup en temporizador
// 🧩 ¿Qué falta aquí? ¿Por qué es peligroso no hacer cleanup?
// ✅ Puede consumir memoria innecesariamente

import { useEffect } from "react";

export default function Temporizador() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
    }, 1000);

    const timerId = setTimeout(() => {
      clearInterval(id);
      console.log("Interval stopped after 10 seconds");
    }, 10000);

    return () => {
      clearInterval(id);
      clearTimeout(timerId);
    };
  }, []);

  return <p>Contando...</p>;
}
