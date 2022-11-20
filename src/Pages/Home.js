import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const linkStyle = {
  margin: "2rem",
  textDecoration: "none",
  color: 'white'
};

function home() {
  return (

    <div style={{ backgroundColor: 'bisque', overflow: 'auto', height: '100vh' }}>
      <nav id='navbar'>
                <Link to='/home' style={linkStyle}>Home</Link> {" "}
                <Link to='/aboutus' style={linkStyle}>AboutUs</Link> {" "}
                <Link to='/jobs' style={linkStyle}>Jobs</Link> {" "}
                <Link to='/contact' style={linkStyle}>Contact</Link> {" "}
            </nav>

      <Card style={{ margin: '20px', width: '30rem', height: '20rem', backgroundColor: 'lightblue', boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)' }}>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Welcome to Home Page</Card.Subtitle>
          <Card.Text>
            This is the Home Page from where other pages navigation can be done.
            A home page is the main web page of a website. The term may also refer to the start page shown in a web browser when the application first opens. Usually, the home page is located at the root of the website's domain or subdomain.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default home;