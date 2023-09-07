import React from "react";
import Error from './Error';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation before submitting the form
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required.';
        }

        // Check if there are any errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log(formData);
            $('.vh_error').show();
          //  alert('Error!');
        } else {
            // Form submission logic here (e.g., API call for authentication)
            console.log(formData);
            $('.vh_success_box').show();
           // alert('Logged in successfully!');

            // window.location.href = "http://localhost:3000/campaign";
        }
    };
    return (
        <>
            <div className="vh_login_wrapper">
                <div className="vh_login_inner">
                    <div className="vh_login_left">
                        <div className="vh_login_left_content">
                            <div className="vh_vector_img">
                                <img src={process.env.PUBLIC_URL + "images/login_vector.png"} />
                                <div className="vh_login_shape">
                                    <img src={process.env.PUBLIC_URL + "images/plybtn_shape.png"} />
                                    <img src={process.env.PUBLIC_URL + "images/sound_shape.png"} />
                                </div>
                            </div>
                            <h4>Video Hosting and Marketing Agency <br /> Without Any Video Skills </h4>
                        </div>
                    </div>
                    <div className="vh_login_right">
                        <div className="vh_login_right_header">
                            <div className="vh_login_logo">
                                <img src={process.env.PUBLIC_URL + "images/logo.png"} />
                            </div>
                            <div className="vh_login_right_heading">
                                <h5>introducing <span>video hosting</span></h5>
                                <p>Welcome Back, Please login to your account. </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="vh_login_input_fields">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                    <label htmlFor="email">Email</label>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
                                            <path d="M1778.68,308h-12.36a1.354,1.354,0,0,0-1.32,1.385v9.23a1.356,1.356,0,0,0,1.32,1.385h12.36a1.352,1.352,0,0,0,1.32-1.385v-9.23A1.356,1.356,0,0,0,1778.68,308Zm-0.18.923-5.97,6.272-6.03-6.272h12Zm-12.62,9.5v-8.853l4.23,4.408Zm0.62,0.653,4.24-4.448,1.48,1.545a0.424,0.424,0,0,0,.62,0l1.45-1.519,4.21,4.424h-12Zm12.62-.653L1774.91,314l4.21-4.424v8.848Z" transform="translate(-1765 -308)" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="vh_login_input_fields">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.password && <small className="text-danger">{errors.password}</small>}
                                    <label htmlFor="password">Password</label>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15">
                                            <path d="M1775.81,415.551a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1775.81,415.551Zm2.61,1.054a0.583,0.583,0,0,0,.58-0.585v-2.169a2.334,2.334,0,0,0-2.32-2.343h-0.7v-2.067a3.48,3.48,0,0,0-6.96,0v2.067h-0.7a2.334,2.334,0,0,0-2.32,2.343v4.805a2.334,2.334,0,0,0,2.32,2.344h8.36a2.334,2.334,0,0,0,2.32-2.344,0.58,0.58,0,1,0-1.16,0,1.167,1.167,0,0,1-1.16,1.172h-8.36a1.167,1.167,0,0,1-1.16-1.172v-4.805a1.166,1.166,0,0,1,1.16-1.171h8.36a1.166,1.166,0,0,1,1.16,1.171v2.169A0.583,0.583,0,0,0,1778.42,416.605Zm-3.6-5.1h-4.64v-2.067a2.321,2.321,0,0,1,4.64,0v2.067Zm-3.39,4.043a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1771.43,415.551Zm-2.18,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1769.25,415.551Zm4.35,0a0.586,0.586,0,1,1-.58.586A0.583,0.583,0,0,1,1773.6,415.551Z" transform="translate(-1766 -406)" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="vh_login_footer_field">
                                    <label className="vh_checkbox">Remember Me
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p ><Link to="#">Forgot Password ?</Link></p>
                                </div>
                                <div className="vh_login_btn">
                                    <button type="submit" className="vh_btn_login">login</button>
                                </div>
                                <div className="vh_dnt_acnt">
                                    <p>Don't have an account? <a href="#">sign up</a></p>
                                </div>
                            </form>
                        </div>
                        <Error />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;