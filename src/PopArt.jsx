import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./PopArt.css"
import {celebrities} from "./images";
import Link from "react-router-dom/Link";

export default function PopArt() {
  return (
    <div className="PopArt">
      <Jumbotron fluid>
        <h1>Pop Art Collection</h1>
      </Jumbotron>
      <div className="PopArt-container">
        {celebrities.map((celebrity) => {
          return (
            <div className="PopArt-image">
              <img src={celebrity} alt="test"></img>
            </div>
          );
        })}
      <Link exact to={"/"}>Back</Link>
      </div>
    </div>
  );
}
