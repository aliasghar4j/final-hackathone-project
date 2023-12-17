import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../assets/images/index'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from '../../Contaxt/AuthContaxt';
const formDataInitialState = {
  email: "",
  password: "",
};


export default function Login() {
  const { dispatch } = useAuthContext()
  const [formData, setFormData] = useState(formDataInitialState);
  const [isRegister, setIsRegister] = useState(false);
  const [tokenValue, setTokenValue] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:7000/auth/login", formData)
      .then((res) => {
        console.log("res.data : ", res.data);

        alert("User successfuly Loggedin!!");
        setIsRegister(false);
        setFormData(formDataInitialState);
        console.log("Token Payload : ", jwtDecode(res.data.token.id));
        console.log("Token Payload : ", jwtDecode(res.data.token.email));
        dispatch({ type: "LOGIN", payload: { user: jwtDecode(res.data.token.email) } })
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };

  return (
    <>
      <div className="container-fluid py-5 contactForm">
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box shadow p-3 m-5 rounded">
              <div className="text-center">
                <h2>Login</h2>
                <hr />
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <input type="email" onChange={handleChange} name='email' className="form-control rounded-pill text-secondary" id="email" placeholder="Enter email" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <input onChange={handleChange} type="password" className="form-control rounded-pill text-secondary" id="password" placeholder="Enter password" name='password' />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-2">
                <div className="col-12 col-md-6 col-lg-8 w-25">
                  <Link onClick={handleLogin} className="btn btn-success text-white rounded-pill button1 w-100">LOGIN</Link>
                </div>
              </div>
              <div className="row justify-content-center m-0 text-center">
                  <div className="form-check">
                    <label className="form-check-label p-0 " htmlFor="flexCheckDefault " style={{ fontSize: "14px" }}>
                      <Link to={"/auth/forgetpassword"}>Forgot Password</Link>
                    </label>
                  </div>
              </div>
              <div className="row justify-content-center">
                <hr />
                <div className="col-12 col-md-8 col-lg-8 text-center">
                  <p style={{ fontSize: "14px" }}>Don't have an account? <Link to={"/auth/register"}>Singup</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
