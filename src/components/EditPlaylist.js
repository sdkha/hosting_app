import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import MultiStepForm from './MultiStepForm';


const EditPlaylist = () =>{

    return(
        <>
            <Sidebar/>
            <div className="vh_dashboard_wrapper">            
                <div className="vh_dashboard_heading_parent">
                    <div className="vh_dashboard_heading_left">
                        <h4>edit playlist</h4>
                    </div>                    
                </div>
                <MultiStepForm />
            </div>
        </>
    )
};



export default EditPlaylist
