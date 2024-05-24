import { useState, useEffect } from "react";

const useResponsiveThreshold = () => {
  const [threshold, setThreshold] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setThreshold(0.15); // Valor para pantallas pequeñas
      } else if (window.innerWidth < 1024) {
        setThreshold(0.15); // Valor para pantallas medianas
      } else {
        setThreshold(0.5); // Valor para pantallas grandes
      }
    };

    // Escuchar cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Establecer el valor inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return threshold;
};

export default useResponsiveThreshold;
