import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const linkStyle = {
    margin: "2rem",
    textDecoration: "none",
    color: 'white'
};

const data = {
    content: {
        body: [
            {
                component: "Data Engineer"
            },
            {
                component: "Software Developer"
            },
            {
                component: "AI/ML Engineer"
            },
            {
                component: "DevOps Engineer"
            }
        ]
    }
};

function jobs() {
    return (

        <div style={{ backgroundColor: 'red', overflow: 'auto', height: '100vh' }}>
            <nav id='navbar'>
                <Link to='/home' style={linkStyle}>Home</Link> {" "}
                <Link to='/aboutus' style={linkStyle}>AboutUs</Link> {" "}
                <Link to='/jobs' style={linkStyle}>Jobs</Link> {" "}
                <Link to='/contact' style={linkStyle}>Contact</Link> {" "}
            </nav>

            <Card style={{ margin: '20px', width: '30rem', height: '20rem', backgroundColor: 'lightblue', boxShadow: '0 2px 2px 2px rgba(9, 9, 9, 0.23)' }}>
                <Card.Body>
                    <Card.Title>Jobs</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Welcome to Jobs Page</Card.Subtitle>
                    <Card.Text>
                        This is the Jobs Page where job descriptions are posted.
                        Job search can be done here. The list of jobs are as below.
                    </Card.Text>

                    <span >The below details are generated using the array.map() functionality</span>
                    <div>
                        {data.content.body.map(job =>
                            <li>{job.component}</li>)}
                    </div>
                </Card.Body>
            </Card>


        </div>
    )
}

export default jobs;