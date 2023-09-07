import React from "react";
import { Link } from "react-router-dom";



const Modal = () =>{
    return(
        <>
        {/* delete modal start */}
            <div className="modal fade vh_dlt_mdl_wrapper" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Delete Confirmation</h5>
                            <Link to="" className="modal_close" data-bs-dismiss="modal" aria-label="Close">&times;</Link>
                        </div>
                        <div className="modal-body">
                            <div className="vh_dlt_mdl_contn">
                                <span>
                                    <svg width="21" height="26" viewBox="0 0 21 26">
                                        <path d="M968.667,434.092a1.175,1.175,0,0,0-1.167,1.183V448.51a2.251,2.251,0,0,1-2.345,2.139h-9.31a2.251,2.251,0,0,1-2.345-2.139V435.275a1.167,1.167,0,1,0-2.333,0V448.51a4.6,4.6,0,0,0,4.678,4.5h9.31a4.6,4.6,0,0,0,4.678-4.5V435.275A1.175,1.175,0,0,0,968.667,434.092Zm1.166-3.548h-4.666v-2.365A1.176,1.176,0,0,0,964,427h-7a1.176,1.176,0,0,0-1.167,1.183v2.365h-4.666a1.183,1.183,0,0,0,0,2.366h18.666A1.183,1.183,0,0,0,969.833,430.544Zm-11.666,0v-1.182h4.666v1.182h-4.666Zm1.166,15.375V437.64a1.167,1.167,0,1,0-2.333,0v8.279A1.167,1.167,0,1,0,959.333,445.919Zm4.667,0V437.64a1.167,1.167,0,1,0-2.333,0v8.279A1.167,1.167,0,1,0,964,445.919Z" transform="translate(-950 -427)"/>
                                    </svg>
                                </span>
                                <h4>are you sure?</h4>
                                <p>Do you really want to delete this record <br/>this record cannot be undone.</p>
                            </div>                            
                        </div>
                        <div className="modal-footer">
                            <Link to="" className="vh_btn2" data-bs-dismiss="modal">No, Keep Record</Link>
                            <Link to="" className="vh_btn">Yes, Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* delete modal end */}

            {/* copy modal start */}
            <div className="modal fade vh_cpy_mdl_wrapper" id="copyModal" tabindex="-1" aria-labelledby="copyModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteModalLabel">Embed Code</h5>
                            <Link to="" className="modal_close" data-bs-dismiss="modal" aria-label="Close">&times;</Link>
                        </div>
                        <div className="modal-body">
                            <div className="vh_cpy_mdl_contn">
                                <div className="vh_cpy_input">
                                    <label>Direct URL</label>  
                                    <input type="text" placeholder="Enter URL Here..."/>
                                    <span>                                        
                                        <svg width="16" height="16" viewBox="0 0 16 16">  
                                            <path d="M1132.7,418.158a2.478,2.478,0,0,0-2.52-2.527l-0.16,0c-0.57-.008-1.16-0.018-1.74.006a0.312,0.312,0,0,1-.24-0.048,0.341,0.341,0,0,1-.05-0.262c0.01-.494.01-1,0-1.483v-0.3a2.5,2.5,0,0,0-2.66-2.649c-1.97,0-3.93,0-5.9,0a2.528,2.528,0,0,0-2.7,2.695c0,0.616,0,1.23.01,1.846,0.01,1.318.02,2.681-.03,4.019a2.706,2.706,0,0,0,.81,2.019,2.53,2.53,0,0,0,1.93.717c0.46-.026.93-0.021,1.42-0.014,0.19,0,.38.006,0.58,0.007v2.183a2.5,2.5,0,0,0,2.55,2.545c1.25,0.006,2.44.01,3.6,0.01,0.85,0,1.69,0,2.51,0a2.5,2.5,0,0,0,2.6-2.59C1132.72,422.356,1132.72,420.338,1132.7,418.158Zm-9.42.135a0.686,0.686,0,0,1,.84-0.844q1.38,0,2.76,0,1.59,0,3.18,0a0.681,0.681,0,0,1,.82.821q0.015,3,0,5.993a0.682,0.682,0,0,1-.82.821q-2.97.006-5.94,0a0.687,0.687,0,0,1-.84-0.842q-0.015-1.071,0-2.141l-0.01-1.644C1123.27,419.735,1123.27,419.014,1123.28,418.293Zm-1.82,1.8a0.371,0.371,0,0,1-.05.233,0.294,0.294,0,0,1-.2.041c-0.22-.008-0.45-0.01-0.68-0.01l-0.4,0c-0.27,0-.55,0-0.81,0a0.653,0.653,0,0,1-.76-0.763c-0.01-.727-0.01-1.454-0.01-2.183v-3.764c0-.739.18-0.919,0.9-0.92,1.94,0,3.87,0,5.81,0a1.018,1.018,0,0,1,.73.184,1.044,1.044,0,0,1,.18.725v1.562c0,0.434,0,.434-0.42.435l-0.54,0c-0.43,0-.85,0-1.27,0a2.484,2.484,0,0,0-2.49,2.511C1121.44,418.87,1121.44,419.506,1121.46,420.089Z" transform="translate(-1116.72 -410.906)"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="vh_cpy_input">
                                    <label>Copy Video Embed Code</label>  
                                    <textarea placeholder="Enter Code Here"></textarea>
                                    <span>                                        
                                        <svg width="16" height="16" viewBox="0 0 16 16">  
                                            <path d="M1132.7,418.158a2.478,2.478,0,0,0-2.52-2.527l-0.16,0c-0.57-.008-1.16-0.018-1.74.006a0.312,0.312,0,0,1-.24-0.048,0.341,0.341,0,0,1-.05-0.262c0.01-.494.01-1,0-1.483v-0.3a2.5,2.5,0,0,0-2.66-2.649c-1.97,0-3.93,0-5.9,0a2.528,2.528,0,0,0-2.7,2.695c0,0.616,0,1.23.01,1.846,0.01,1.318.02,2.681-.03,4.019a2.706,2.706,0,0,0,.81,2.019,2.53,2.53,0,0,0,1.93.717c0.46-.026.93-0.021,1.42-0.014,0.19,0,.38.006,0.58,0.007v2.183a2.5,2.5,0,0,0,2.55,2.545c1.25,0.006,2.44.01,3.6,0.01,0.85,0,1.69,0,2.51,0a2.5,2.5,0,0,0,2.6-2.59C1132.72,422.356,1132.72,420.338,1132.7,418.158Zm-9.42.135a0.686,0.686,0,0,1,.84-0.844q1.38,0,2.76,0,1.59,0,3.18,0a0.681,0.681,0,0,1,.82.821q0.015,3,0,5.993a0.682,0.682,0,0,1-.82.821q-2.97.006-5.94,0a0.687,0.687,0,0,1-.84-0.842q-0.015-1.071,0-2.141l-0.01-1.644C1123.27,419.735,1123.27,419.014,1123.28,418.293Zm-1.82,1.8a0.371,0.371,0,0,1-.05.233,0.294,0.294,0,0,1-.2.041c-0.22-.008-0.45-0.01-0.68-0.01l-0.4,0c-0.27,0-.55,0-0.81,0a0.653,0.653,0,0,1-.76-0.763c-0.01-.727-0.01-1.454-0.01-2.183v-3.764c0-.739.18-0.919,0.9-0.92,1.94,0,3.87,0,5.81,0a1.018,1.018,0,0,1,.73.184,1.044,1.044,0,0,1,.18.725v1.562c0,0.434,0,.434-0.42.435l-0.54,0c-0.43,0-.85,0-1.27,0a2.484,2.484,0,0,0-2.49,2.511C1121.44,418.87,1121.44,419.506,1121.46,420.089Z" transform="translate(-1116.72 -410.906)"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div>
            {/* copy modal end */}
        </>
    )
};


export default Modal;