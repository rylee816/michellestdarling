import React from 'react'
import {antiques} from "./images"
import Jumbotron from "react-bootstrap/Jumbotron";
import Link from "react-router-dom/Link";
import "./Antiques.css"

export default function Antiques() {
    return (
    <div className="Antiques">
      <Jumbotron fluid>
        <h1>Antiques Collection</h1>
      </Jumbotron>
      <div className="Antique-container">
        {antiques.map((antique) => {
          return (
            <div className="Antique-image">
              <img src={antique} alt="test"></img>
            </div>
          );
        })}
      <Link exact to={"/"}>Back</Link>
      </div>
    </div>
    )
}
