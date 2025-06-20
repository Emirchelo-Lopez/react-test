// ❓ Pregunta 3: Limpieza olvidada en efectos
// 🧩 ¿Qué pasa si este componente se monta y desmonta repetidamente? ¿Cómo solucionarlo?
// ✅ Se debe hacer un cleanup para evitar fugas de memoria

import { useEffect } from "react";

export default function ClickLogger() {
  useEffect(() => {
    const handleClick = () => console.log("Click!");
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <p>Haz clic en cualquier parte</p>;
}
