import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Portraits.css"
import {portraits} from "./images";
import Link from "react-router-dom/Link";

export default function Portraits() {
    return (
        <div className="Portraits">
              <Jumbotron fluid>
        <h1>Portrait Collection</h1>
      </Jumbotron>
      <div className="Portrait-container">
        {portraits.map((portrait) => {
          return (
            <div className="Portrait-image">
              <img src={portrait} alt="test"></img>
            </div>
          );
        })}
      <Link exact to={"/"}>Back</Link>
      </div>
        </div>
    )
}
