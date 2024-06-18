import { useState, useEffect } from "react";

const useResponsiveThreshold = () => {
  const [threshold, setThreshold] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setThreshold(0.15);
      } else if (window.innerWidth < 1024) {
        setThreshold(0.15);
      } else {
        setThreshold(0.5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return threshold;
};

export default useResponsiveThreshold;
