import { useState } from "react";
import Footer from "./Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function Home() {
  const [isHover, setIsHover] = useState(false);
  function handleMouseEnter() {
    setIsHover((isHover) => !isHover);
  }
  function handleMouseLeave() {
    setIsHover((isHover) => !isHover);
  }
  return (
    <div>
      <div className="relative">
        <Navbar
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isHover={isHover}
          setIsHover={setIsHover}
        />
        <Hero />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
