// ❓ Pregunta 6: Estado mutado directamente en onChange
// 🧩 ¿Qué está mal aquí? ¿Por qué no funciona el input?
// ¿Cómo arreglarías el código para que funcione correctamente?
// Se debe utilizar setValue para cambiar el estado de value, agregué un h1 para visualizar el cambio en tiempo real

import { useState } from "react";

export default function InputTracker() {
  let [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h1>The updated value is: {value}</h1>
    </>
  );
}
