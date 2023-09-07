import React, { useState } from 'react';
import $ from "jquery";

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleNext = () => {

        setCurrentStep((prevStep) => prevStep + 1);

        $(`#steps_menu li:nth-child(${currentStep+1})`).addClass('active');

    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
        $(`#steps_menu li:nth-child(${currentStep})`).addClass('active');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with formData object
        console.log(formData);
    };

    return (
        <div>
            <div className="vh_edt_header_btns">
                <ul id="steps_menu">
                    <li className='active'><button type="button" onClick={handleNext}><span>01</span>Title & Settings</button></li>
                    <li><button type="button" onClick={handleNext}><span>02</span>Choose Campaign</button></li>
                    <li><button type="button" onClick={handleNext}><span>03</span>Preview</button></li>
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                    <>
                        <div className="vh_edt_playlist_wrapper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>playlist title</label>
                                            <input type="text" placeholder="First Playlist" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>heading</label>
                                            <textarea placeholder="Video hosting - With the help of video hosting, you can create exciting & new campaigns that will contain awesome videos"></textarea>
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>meta name</label>
                                            <input type="text" placeholder="Meta name here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>disclaimer</label>
                                            <textarea placeholder="Disclaimer"></textarea>
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>meta title</label>
                                            <input type="text" placeholder="Meta title here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>meta keywords</label>
                                            <input type="text" placeholder="Meta keywords here" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>custome header script</label>
                                            <textarea placeholder="Videohosting heading here"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>meta descriptions</label>
                                            <input type="text" placeholder="Meta descriptions here" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>custome footer script</label>
                                            <textarea placeholder="Disclaimer"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vh_login_footer_field">
                                <label className="vh_checkbox">Show campaigns without overlay
                                    <input type="checkbox" id="rem_check" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="vh_steps_btn">
                            <button type="button" className='vh_btn vh_next_btn' onClick={handleNext}>next steps</button>
                        </div>
                    </>
                )}

                {currentStep === 2 && (
                    <>
                        <div className="vh_campn_heading">
                            <h4>selected campaign (01)</h4>
                        </div>
                        <div className="vh_lp_wrapper">
                            <div className="vh_lp_wrapper_inner">
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp1.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>business services</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp2.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>business services</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp3.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>business services</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp4.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>auto repair</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp5.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>fitness</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp6.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>dance</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp7.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>floristry</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vh_lp_main_box">
                                    <div className="vh_lp_main_box_inner">
                                        <div className="vh_lp_img">
                                            <img src={process.env.PUBLIC_URL + "images/lp8.jpg"} />
                                            <div className="vh_lg_icons">
                                                <span>
                                                    <svg width="13" height="14" viewBox="0 0 13 14">
                                                        <path d="M1087.29,257.578a0.292,0.292,0,0,0-.42,0l-5.62,6.056a0.383,0.383,0,0,0-.08.277,0.347,0.347,0,0,0,.16.234l0.46,0.248v0.837l-1.41.435-1.43-1.537,0.41-1.524h0.77l0.23,0.5a0.329,0.329,0,0,0,.22.172,0.421,0.421,0,0,0,.05,0,0.288,0.288,0,0,0,.21-0.094l5.62-6.056a0.355,0.355,0,0,0,.08-0.225,0.351,0.351,0,0,0-.08-0.225l-1.09-1.171a0.292,0.292,0,0,0-.21-0.094h0a0.3,0.3,0,0,0-.21.094l-6.03,6.555v0.011a0.284,0.284,0,0,0-.07.126l-0.51,1.934-0.67,2.523a0.349,0.349,0,0,0,.07.313,0.287,0.287,0,0,0,.21.093,0.232,0.232,0,0,0,.08-0.012l2.34-.721,1.8-.552s0.01-.007.01-0.009a0.329,0.329,0,0,0,.06-0.029,0.3,0.3,0,0,0,.04-0.034,0.176,0.176,0,0,0,.02-0.009l6.08-6.5a0.351,0.351,0,0,0,.08-0.225,0.307,0.307,0,0,0-.08-0.226Zm3.02-2.242-1.77-1.911a1.157,1.157,0,0,0-1.68,0l-1.08,1.177a0.347,0.347,0,0,0,0,.449l3.02,3.251a0.283,0.283,0,0,0,.21.093,0.3,0.3,0,0,0,.21-0.092l1.09-1.167A1.333,1.333,0,0,0,1090.31,255.336Z" transform="translate(-1077.66 -253.063)" />
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg width="15" height="10" viewBox="0 0 15 10">
                                                        <path d="M1129,259.97c0.15-.251.29-0.505,0.44-0.754a9.187,9.187,0,0,1,3.1-3.107,7.533,7.533,0,0,1,3.15-1.067,7.747,7.747,0,0,1,6,1.937,9.478,9.478,0,0,1,2.29,2.943,0.21,0.21,0,0,1,0,.156,9.284,9.284,0,0,1-3.52,3.833,7.5,7.5,0,0,1-3.12,1.046,7.741,7.741,0,0,1-6-1.934,9.532,9.532,0,0,1-2.22-2.8c-0.04-.067-0.08-0.131-0.12-0.2V259.97Zm7.52-3.1a3.131,3.131,0,1,0,3.13,3.143A3.147,3.147,0,0,0,1136.52,256.869Zm0,1.253a1.878,1.878,0,1,1-1.88,1.868A1.884,1.884,0,0,1,1136.52,258.122Z" transform="translate(-1129 -255)" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="vh_lp_tep_name">
                                            <h4>delicious food</h4>
                                            <span>
                                                <svg width="9" height="7" viewBox="0 0 9 7">
                                                    <path d="M1222.44,423.865a0.461,0.461,0,0,1-.33.135,0.455,0.455,0,0,1-.32-0.135l-2.59-2.6a0.69,0.69,0,0,1,0-.977l0.33-.325a0.682,0.682,0,0,1,.97,0l1.61,1.622,4.37-4.384a0.694,0.694,0,0,1,.98,0l0.32,0.325a0.69,0.69,0,0,1,0,.977Z" transform="translate(-1219 -417)" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vh_steps_btn">
                            <button type="button" data-step="1" className='vh_btn vh_previous_btn' onClick={handlePrevious}>previous</button>
                            <button type="button" className='vh_btn' onClick={handleNext}>next steps</button>
                        </div>
                    </>
                )}

                {currentStep === 3 && (
                    <>
                        <div className="vh_edt_playlist_wrapper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>playlist title</label>
                                            <input type="text" placeholder="First Playlist" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>heading</label>
                                            <textarea placeholder="Video hosting - With the help of video hosting, you can create exciting & new campaigns that will contain awesome videos"></textarea>
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>meta name</label>
                                            <input type="text" placeholder="Meta name here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>disclaimer</label>
                                            <textarea placeholder="Disclaimer"></textarea>
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>meta title</label>
                                            <input type="text" placeholder="Meta title here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>meta keywords</label>
                                            <input type="text" placeholder="Meta keywords here" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>custome header script</label>
                                            <textarea placeholder="Videohosting heading here"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="vh_edt_plylst_input_fields">
                                        <div className="vh_edt_input">
                                            <label>meta descriptions</label>
                                            <input type="text" placeholder="Meta descriptions here" />
                                        </div>
                                        <div className="vh_edt_input">
                                            <label>custome footer script</label>
                                            <textarea placeholder="Disclaimer"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vh_login_footer_field">
                                <label className="vh_checkbox">Show campaigns without overlay
                                    <input type="checkbox" id="rem_check" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default MultiStepForm;
