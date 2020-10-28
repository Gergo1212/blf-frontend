import React from 'react';
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Rules from "./page/Rules";
import SeasonAdmin from "./page/SeasonAdmin";
import Main from "./page/Main";
import {SeasonProvider} from "./context/SeasonContext";
import {LeagueProvider} from "./context/LeagueContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Admin from "./page/Admin";

function App() {

    const appStyle = {
        width: "100vw",
        //Todo 100% height --> with full content
        height: "100vh",
        minHeight: "100%",
        backgroundColor: "#010101",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 4%"
    }

    return (
        <div style={appStyle} className="App">
            <SeasonProvider>
                <LeagueProvider>
                    <Router>
                        <Header/>
                        <Navbar/>
                        <Switch>
                            <Route exact path={"/"} component={Main}/>
                            <Route exact path={"/rules"} component={Rules}/>
                            <Route exact path={"/admin"} component={Admin}/>
                            <Route exact path={"/admin/season"} component={SeasonAdmin}/>
                            <Route exact path={"/admin/league"} component={Admin}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </LeagueProvider>
            </SeasonProvider>
        </div>
    );
}

export default App;
