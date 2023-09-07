import React from "react";
import {Routes, Route} from "react-router-dom";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import EditPlaylist from "./components/EditPlaylist";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import PlaylistPage from "./components/PlaylistPage";
import Storage from "./components/Storage";
import AutoResponder from "./components/AutoResponder"
import Leads from "./components/Leads"
import SubUsers from "./components/SubUsers"
import Bonuses from "./components/Bonuses"
import TrainingTutorials from "./components/TrainingTutorials"

const App = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/campaign" element={<Dashboard/>}></Route>
                <Route path="/analytics" element={<Analytics/>}></Route>
                <Route path="/landingpage" element={<LandingPage/>}></Route>
                <Route path="/playlist" element={<PlaylistPage/>}></Route>
                <Route path="/storage" element={<Storage/>}></Route>
                <Route path="/autoresponder" element={<AutoResponder/>}></Route>
                <Route path="/leads" element={<Leads/>}></Route>
                <Route path="/subusers" element={<SubUsers/>}></Route>
                <Route path="/bonuses" element={<Bonuses/>}></Route>
                <Route path="/training" element={<TrainingTutorials/>}></Route>
                <Route path="/editplaylist" element={<EditPlaylist/>}></Route>
            </Routes>
        </>
    )
};


export default App;

