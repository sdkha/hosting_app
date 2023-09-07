import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import CampagnsTable from "./CampaignsTable";


const Dashboard = () =>{
    return(
        <>
        {/* sidebar start */}
        <Sidebar/>
            {/* sidebar end */}
        {/* dashboard start */}
        <div className="vh_dashboard_wrapper">            
            <div className="vh_dashboard_heading_parent">
                <div className="vh_dashboard_heading_left">
                    <h4>campaigns</h4>
                </div>
                <div className="vh_dashboard_heading_right">
                    <div className="vh_dasbord_search">
                        <input type="text" placeholder="search here..." />
                        <span>
                            <svg width="14" height="14" viewBox="0 0 14 14">
                                <path d="M1433.67,67.043l-3.22-3.263a5.643,5.643,0,1,0-4.79,2.689,5.589,5.589,0,0,0,3.23-1.028l3.18,3.224a1.122,1.122,0,0,0,1.6,0A1.162,1.162,0,0,0,1433.67,67.043Zm-8.01-2.432a3.877,3.877,0,1,1,3.82-3.876A3.85,3.85,0,0,1,1425.66,64.611Z" transform="translate(-1420 -55)"/>
                            </svg>
                        </span>
                    </div>
                    <div className="vh_dsbrd_campn">
                        <Link to="" className="vh_btn">add campagns</Link>
                    </div>
                </div>
            </div> 
            {/* campaign table start */}
            <CampagnsTable/>
            {/* campaign table end */}
        </div>               
        {/* dashboard end */}
        </>
    )
};

export default Dashboard;


