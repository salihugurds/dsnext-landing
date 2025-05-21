import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    console.log(hash);

    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // No hash? Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToHandler;
