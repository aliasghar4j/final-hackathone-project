import React, { useState } from 'react'
import { images } from '../../../assets/images/index'
import { Link } from 'react-router-dom'
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const formDataInitialState = {
  role: "",
  email: "",
  password: "",
  name: "",
  specialization: "",

};

export default function Register() {
  const [formData, setFormData] = useState(formDataInitialState);
  const [isRegister, setIsRegister] = useState(false);
  const [tokenValue, setTokenValue] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // console.log('formData', formData)
    // return
    axios
      .post("http://localhost:7000/auth/register", formData)
      .then((res) => {
        console.log("res.data : ", res.data);
        alert("User successfuly registered");
        setIsRegister(true);
        setFormData(formDataInitialState);
      })
      .catch((error) => {
        console.log("Error : ", error.message);
      });
  };



  return (
    <>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 py-5 col-lg-6">
            <div className="box bg-white shadow p-3 m-5 rounded">
              <div className="text-center">
                <h3>Register</h3>
                <hr />
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <input onChange={handleChange} type="email" className="form-control rounded-pill text-secondary" id="email" placeholder="Enter email" name='email' />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <input type="password" onChange={handleChange} className="form-control rounded-pill text-secondary" id="password" placeholder="Enter password" name='password' />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8 w-25 text-center">
                  <Link className="btn btn-success text-white rounded-pill button1 w-100" onClick={handleRegister}>REGISTER</Link>
                </div>
              </div>
                <hr />
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p style={{ fontSize: "14px" }} className='text-center'>Already Have An Account? <Link to={"/auth/login"}>Login</Link></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
