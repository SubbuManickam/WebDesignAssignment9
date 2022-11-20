import React from "react"
import { Alert } from 'react-alert'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const submitData = async (event) => {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const data = {}
        data.email = email;
        data.password = password;

        const result = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resultJson = await result.json();
        if (resultJson.email) {
            console.log("resultJson.email: " + resultJson.email);
            navigate("/home");
        } else {
            alert("Enter valid details");
        }

    }

    return (
        <div className="Login-form-container">
            <form className="Login-form">
                <div className="Login-form-content">
                    <h3 className="Login-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" className="form-control mt-1" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control mt-1" id="password" placeholder="Enter password" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" id="buttonClick" onClick={submitData}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default Login;