import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";

function RecipesCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   const controller= new AbortController();
    async function loadImages() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=6&select=name,image"
        ,{ signal: controller.signal });
      setImages(response.data.recipes.map((recipe) => recipe.image));
      setLoading(false);
    } catch (err) {
        if (axios.isCancel(err)) {return;}
        setError(err.message);
        setLoading(false);
      }
    }
    loadImages();
    return () => {console.log("cleanup");
        controller.abort();};
  }, []);

if (loading) return(<div className="carousel-message">...טוען</div>)
if(error) return(<div className="carousel-message error">...</div>)
return (<Carousel images={images} intervalSeconds={4} />)
   }

export default RecipesCarousel;