import React from "react";
import GalleryCard from "./GalleryCard";
import dogDisplay from "./images/paintings/Animals/IMG_3480.jpg";
import portraitDisplay from "./images/paintings/Portraits/IMG_3361.jpg";
import celebrityDisplay from "./images/paintings/Celebrities/IMG_0014_copy.jpg";
import antiquesDisplay from "./images/antique1.jpg"
import "./Gallery.css";


const images = [
  {
    img: `${portraitDisplay}`,
    text:  "A collection of handmade custom artwork of your favorite portraits."
  },
  {
    img: `${celebrityDisplay}`,
    text:  "A collection of handmade custom artwork of your favorite celebrities."
  },
   {
    img: `${dogDisplay}`,
    text:  "A collection of handmade custom artwork of your favorite pets."
  },
  {
    img: `${antiquesDisplay}`,
    text: "Antiques, figurines, and more." 
  },
]

export default function Gallery() {
  return (
    <div className="Gallery">
       <GalleryCard img={images[0].img} text={images[0].text} category="portraits"/>
       <GalleryCard img={images[1].img} text={images[1].text} category="pop-art"/>
       <GalleryCard img={images[2].img} text={images[2].text} category="pets"/>
       <GalleryCard img={images[3].img} text={images[3].text} category="antiques"/>
    </div>
  );
}
