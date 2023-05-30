import React, { useEffect, useState } from "react";
import "../Carousel/Corousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Movie from "../../pages/Movie";
import { img_300, unavailable } from "../../configuration/Configuration";
import {options} from "../Servies/Auth";
const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ iD, media_type }) => {
  const [type, setType] = useState("movie");
  const [actor, setActor] = useState([]);
  const[data ,setData]=useState([])

  
  const getDataOnClick = () => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${iD}/credits?api_key=26ba5e77849587dbd7df199727859189&language=en-US`,
      options
    )
      .then( async(response) => {
        let JsonRes5 = await response.json();
        console.log("response.json()", JsonRes5);
        if (JsonRes5.cast) {
          setActor(JsonRes5.cast);
        }
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  
  useEffect(() => {
    getDataOnClick();
  }, [type, iD]);
  
  const items = actor.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}${c.profile_path}` : unavailable}
        alt={"Photo Unavailable"}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c.original_name}</b>
    </div>
  ));
  
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </>
  );
};
export default Carousel;
