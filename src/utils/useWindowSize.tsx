import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to get the size category based on window width
  //   const getWindowSize = (width) => {
  // if (width < 576) return "xs";
  // if (width >= 576 && width < 768) return "sm";
  // if (width >= 768 && width < 992) return "md";
  // if (width >= 992 && width < 1200) return "lg";
  // if (width >= 1200 && width < 1600) return "xl";
  // return "xxl";
  //   };

  // Update the window width when it changes
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Set up resize event listener
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return windowWidth; // Return the size category
};

export default useWindowSize;
