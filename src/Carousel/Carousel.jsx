import { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

function Carousel({ images = [], intervalSeconds = 3 }) {
const [selected, setSelected] = useState(0);
  function move(step) {
    setSelected((prev) => (prev + step+images.length)%images.length);
  }
    return (
    <div className="carousel">
      {images.map((src, index) => (index === selected) && (
        <CarouselItem key={index} src={src} alt={`Slide ${index + 1}`} />
      ))}
        <button className="carousel-arrow prev" onClick={() => move(-1)}>
  &#10094;
</button>
<button className="carousel-arrow next" onClick={() => move(1)}>
  &#10095;
</button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === selected ? "carousel-dot active" : "carousel-dot"}
            onClick={() => setSelected(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;