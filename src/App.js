import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Rules from "./page/Rules";
import Main from "./page/Main";
import {SeasonProvider} from "./context/SeasonContext";
import {LeagueProvider} from "./context/LeagueContext";
import {TeamProvider} from "./context/TeamContext";
import Admin from "./page/admin/Admin";
import SeasonAdmin from "./page/admin/SeasonAdmin";
import LeagueAdmin from "./page/admin/LeagueAdmin";
import TeamAdmin from "./page/admin/TeamAdmin";
import "./style/Header.css";
import "./style/Navbar.css";
import "./style/Button.css";
import "./style/Footer.css";
import "./style/RenderDiv.css";
import "./style/Table.css";
import "./style/RenderDiv.css";





function App() {

    return (
        <div style={{backgroundColor:"#010101"}} className="App">
            <SeasonProvider>
                <LeagueProvider>
                    <TeamProvider>
                        <Router>
                            <Header/>
                            <Navbar/>
                            <Switch>
                                <Route exact path={"/admin"} component={Admin}/>
                                <Route exact path={"/admin/season"} component={SeasonAdmin}/>
                                <Route exact path={"/admin/league"} component={LeagueAdmin}/>
                                <Route exact path={"/admin/team"} component={TeamAdmin}/>
                                <Route exact path={"/"} component={Main}/>
                                <Route exact path={"/rules"} component={Rules}/>
                            </Switch>
                            <Footer/>
                        </Router>
                    </TeamProvider>
                </LeagueProvider>
            </SeasonProvider>
        </div>
    );
}

export default App;
