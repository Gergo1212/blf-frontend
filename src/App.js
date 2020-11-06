import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Rules from "./page/Rules";
import Main from "./page/Main";
import Admin from "./page/admin/Admin";
import SeasonAdmin from "./page/admin/SeasonAdmin";
import LeagueAdmin from "./page/admin/LeagueAdmin";
import TeamAdmin from "./page/admin/TeamAdmin";
import ElementAdmin from "./page/admin/ElementAdmin";
import PlayerAdmin from "./page/admin/PlayerAdmin";
import MatchAdmin from "./page/admin/MatchAdmin";
import StatAdmin from "./page/admin/StatAdmin";


function App() {

    return (
        <div className="App">
            <Router>
                <Header/>
                <Navbar/>
                <Switch>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/admin/season"} component={SeasonAdmin}/>
                    <Route exact path={"/admin/league"} component={LeagueAdmin}/>
                    <Route exact path={"/admin/team"} component={TeamAdmin}/>
                    <Route exact path={"/admin/player"} component={PlayerAdmin}/>
                    <Route exact path={"/admin/event"} component={MatchAdmin}/>
                    <Route exact path={"/admin/statistic"} component={StatAdmin}/>
                    <Route exact path={"/admin/:service/:id"} component={ElementAdmin}/>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/rules"} component={Rules}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
