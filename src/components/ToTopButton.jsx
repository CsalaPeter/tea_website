import { useState } from "react";
import "../css/components/toTopButton.css";

const ToTopButton = () => {
  const [visable, setVisable] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisable(true);
    } else if (scrolled <= 300) {
      setVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      className="button"
      onClick={scrollToTop}
      style={{
        display: visable ? "inline" : "none",
      }}
    ></div>
  );
};

export default ToTopButton;
