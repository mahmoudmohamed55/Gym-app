
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function Up() {
// state
  const [visible, setVisible] = useState(false);
  // to visible the up button or not
  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled >= 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
// to return page to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {visible && (
        <div
          className="up text-2xl bg-main text-white p-2 rounded-full fixed bottom-4 right-4 z-40 cursor-pointer hover:bg-main/80"
          onClick={scrollToTop}
        >
          <FaArrowUp  className="" />
        </div>
      )}
    </>
  );
}

export default Up;
