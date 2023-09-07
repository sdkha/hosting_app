import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <Sidebar />
            <div className="vh_dashboard_wrapper">
                <div className="vh_dashboard_heading_parent">
                    <div className="vh_dashboard_heading_left">
                        <h4>customize landing page</h4>
                    </div>
                    <div className="vh_dashboard_heading_right">
                        <div className="vh_dasbord_search">
                            <input type="text" placeholder="search here..." />
                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14">
                                    <path d="M1433.67,67.043l-3.22-3.263a5.643,5.643,0,1,0-4.79,2.689,5.589,5.589,0,0,0,3.23-1.028l3.18,3.224a1.122,1.122,0,0,0,1.6,0A1.162,1.162,0,0,0,1433.67,67.043Zm-8.01-2.432a3.877,3.877,0,1,1,3.82-3.876A3.85,3.85,0,0,1,1425.66,64.611Z" transform="translate(-1420 -55)" />
                                </svg>
                            </span>
                        </div>
                        <div className="vh_dsbrd_campn">
                            <Link to="" className="vh_btn">my landing pages</Link>
                        </div>
                    </div>
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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

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
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className="vh_lp_main_box">
                            <div className="vh_lp_main_box_inner">
                                <div className="vh_lp_img">
                                    <img src={process.env.PUBLIC_URL + "images/lp9.jpg"} />
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
                                    <h4>pizza restaurant</h4>
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className="vh_lp_main_box">
                            <div className="vh_lp_main_box_inner">
                                <div className="vh_lp_img">
                                    <img src={process.env.PUBLIC_URL + "images/lp10.jpg"} />
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
                                    <h4>professional business</h4>
                                    <label className="vh_checkbox">
                                        <input type="checkbox" id="rem_check" />
                                        <span className="checkmark"></span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vh_lp_btn">
                    <Link to="" className="vh_btn">view all templates</Link>
                </div>
            </div>
        </>
    )
};



export default LandingPage;