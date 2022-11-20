import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const linkStyle = {
    margin: "2rem",
    textDecoration: "none",
    color: 'white'
  };

function aboutus() {
    return (
        
        <div style={{ backgroundColor: 'yellow', overflow: 'auto', height: '100vh' }}>
        <nav id='navbar'>
                <Link to='/home' style={linkStyle}>Home</Link> {" "}
                <Link to='/aboutus' style={linkStyle}>AboutUs</Link> {" "}
                <Link to='/jobs' style={linkStyle}>Jobs</Link> {" "}
                <Link to='/contact' style={linkStyle}>Contact</Link> {" "}
            </nav>
  
        <Card style={{ margin: '20px', width: '30rem', height: '20rem', backgroundColor: 'lightblue', boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)' }}>
          <Card.Body>
            <Card.Title>About Us</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Welcome to About Us Page</Card.Subtitle>
            <Card.Text>
              This is the About Us page where details about a site are given.
              This is a sample React Assignment built to showcase the interaction of Node, MongoDB and React js with one another.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default aboutus;