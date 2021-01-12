import React from "react";
import {Link} from "react-router-dom";
import Gallery from "./Gallery";
import star from "./images/star.png";
import pinup from "./images/pinup.png";
import Button from "react-bootstrap/Button";
import "./Title.css";

export default function Title() {
  return (
    <div className="Title-main">
      <header className="Title">
        <div className="Title-stars">
          <img className="star-1" src={star} alt="star"></img>
          <img className="star-2" src={star} alt="star"></img>
          <img className="star-3" src={star} alt="star"></img>
          <img className="pinup" src={pinup} alt="pinup-girl"></img>
        </div>
        <div className="Title-header-text">
          <h3>
            A collection of{" "}
            <span id="artwork" className="word-artwork">
              artwork
            </span>{" "}
            <span id="by">by</span>
          </h3>
          {/* <div className="word-love"><h3><span id="love">LOVE</span></h3></div> */}
        </div>
        <h1>Michelle St. Darling</h1>
        </header>
        <div id="circle">
          <Link exact to="/portraits"><h3><i class="fa fa-star-o" aria-hidden="true"></i>Portraits<i class="fa fa-star-o" aria-hidden="true"></i></h3></Link>
          <Link exact to="/pop-art"><h3><i class="fa fa-star-o" aria-hidden="true"></i>Pop Art<i class="fa fa-star-o" aria-hidden="true"></i></h3></Link>
          <Link exact to="/pets"><h3><i class="fa fa-star-o" aria-hidden="true"></i>Pets<i class="fa fa-star-o" aria-hidden="true"></i></h3></Link>
          <Link exact to="/antiques"><h3><i class="fa fa-star-o" aria-hidden="true"></i>Antiques<i class="fa fa-star-o" aria-hidden="true"></i></h3></Link>
          <Link exact to="/contact"><Button>Place an Order!</Button></Link>
        </div>
        <div className="icon-container">
           <a href="https://facebook.com/paintingsbymichellewilliams"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
           <a href="https://instagram.com/paintings_by_msd"><i class="fa fa-instagram" aria-hidden="true"></i></a>
           <a href="https://etsy.com/shop/darlingvintageandart"><i class="fa fa-etsy" aria-hidden="true"></i></a>
        </div>
      <Gallery />
    </div>
  );
}
