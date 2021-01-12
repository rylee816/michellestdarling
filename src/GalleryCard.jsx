import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Link from "react-router-dom/Link"
import "./Gallery.css"

export default function GalleryCard(props) {
  let linkPath = `/${props.category}`
    return (
        <Card >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.category} collection</Card.Title>
          <Card.Text>
           {props.text}
          </Card.Text>
          <Link exact to={linkPath}><Button variant="primary">{props.category}</Button></Link>
        </Card.Body>
      </Card>
    )
}


