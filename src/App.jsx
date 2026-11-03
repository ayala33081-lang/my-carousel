import Carousel from "./Carousel/Carousel";

const images = [
  "/WhatsApp Image 2026-10-27 at 11.03.14.jpeg",
  "/WhatsApp Image 2026-10-27 at 11.22.20.jpeg",
  "/WhatsApp Image 2026-10-27 at 12.35.13 (1).jpeg"
];

function App() {
  return <Carousel images={images} intervalSeconds={3} />;
}

export default App;