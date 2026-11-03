import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import RecipesCarousel from "./RecipesCarousel/RecipesCarousel";

const images = [
  "/WhatsApp Image 2026-10-27 at 11.03.14.jpeg",
  "/WhatsApp Image 2026-10-27 at 11.22.20.jpeg",
  "/WhatsApp Image 2026-10-27 at 12.35.13 (1).jpeg"
];


function App() {
    const [show, setShow] = useState(true);
 
  return <>
   <button onClick={() => setShow((prev) => !prev)}>
        {show ? "הסתר מתכונים" : "הצג מתכונים"}
      </button>
  <Carousel images={images} intervalSeconds={3} />
  {show && <RecipesCarousel />}
  </>;
}

export default App;