import React from "react";
import { animals } from "./images.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Link from "react-router-dom/Link";
import "./Pets.css";

export default function Pets() {
  return (
    <div className="Pets">
      <Jumbotron fluid>
        <h1>Pet Collection</h1>
      </Jumbotron>
      <div className="Pet-container">
        {animals.map((animal) => {
          return (
            <div className="Pet-image">
              <img src={animal} alt="test"></img>
            </div>
          );
        })}
      <Link exact to={"/"}>Back</Link>
      </div>
    </div>
  );
}
