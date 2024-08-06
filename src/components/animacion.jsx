import React, { useRef, useEffect } from "react";
import { initAnimation } from "./animacion"; // Importa la función de animación

const ThreeAnimationComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Llama a la función de inicialización de animación y pasa el contenedor actual
      const cleanUp = initAnimation(containerRef.current);

      // Limpia los recursos al desmontar el componente
      return cleanUp;
    }
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeAnimationComponent; // Asegúrate de exportar por defecto el componente
