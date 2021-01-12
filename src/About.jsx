import React from "react";
import "./About.css";
import michelle2 from "./images/michelle2.JPG";
import michelle from "./images/michelle.png"

export default function About() {
  return (
    <div className="About">
      <div className="About-text">
      <h3>Michelle St. Darling</h3>
      <div className="text-image">
        <img src={michelle} alt="michelle"></img>
        </div>
        <div className="text">
        <p>
          Michelle has always had a passion for vintage, so it was a natural progression for her to begin her career painting celebrities from bygone eras. As her work progressed she began to receive requests to paint her clients' cherished family photos and pet portraits. With a focus on highlight and shadow, her paintings have a timeless look that will be treasured by families for years to come. 
        </p>
        <p>
          Clients often commission her works for gifts and remembrances of loved ones and pets lost, or to commemorate treasured memories.
        </p>
        <p>
          Because of her love of vintage collectibles, she also does a series of fun, sparkly, and lighthearted likenesses of some of the most sought after collectibles on the market.
        </p>
        </div>
      </div>
      <div className="About-image">
        <img
          className="michelle-img"
          src={michelle2}
          alt="michelle-artist"
        />
      </div>
    </div>
  );
}
