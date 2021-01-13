import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Contact() {
  const [state, handleSubmit] = useForm("contactMe");
 
console.log(handleSubmit);
  if (state.succeeded) {
    return(
        <div style={{height: "100vh"}} className="Contact">
            <h3 style={{paddingTop: "100px", textAlign: "center", width: "100%", margin:"auto"}}>Thank you! </h3>
            <h3 style={{textAlign: "center", width: "100%", margin:"auto"}}> Your email has been sent.</h3>
            <h3 style={{textAlign: "center", width: "100%", margin: "auto"}}> I look forward to getting back to you!</h3>
        </div>
    ) 
  }
  return (
    <div className="Contact">
      <Container className="form-container">
        <Form
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
        <h3 style={{color: "darkslategrey", marginBottom: "30px", fontFamily:"sans-serif", maxWidth: "500px"}}>Message me for info or upload a quality photo for an estimate!</h3>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              required=""
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required=""
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <ValidationError field="email" errors={state.errors} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message me!</Form.Label>
            <textarea
              style={{
                display: "block",
                width: "100%",
                color: "rgba(0, 0, 0, 1)",
                padding: "3px",
                borderColor: "rgba(0, 0, 0, .2)",
              }}
              placeholder="Message"
              name="message"
            ></textarea>
          </Form.Group>
          <input type="text" name="_gotcha" style={{display: "none"}} />
          <Button value="Send Message" variant="primary" type="submit">
            Submit
          </Button>
          <ValidationError errors={state.errors} />
          <Form.Group>
          <Form.Label>Or Upload an Image!</Form.Label>
          <Button style={{display: "block", margin: "auto"}}><a href="mailto:michellestdarling@gmail.com">Upload an image!</a></Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
