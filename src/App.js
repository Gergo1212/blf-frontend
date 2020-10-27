import React from 'react';
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Rules from "./page/Rules";
import Admin from "./page/Admin";
import {SeasonProvider} from "./context/SeasonContext";

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
                <Router>
                    <Header/>
                    <Navbar/>
                    <Switch>
                        <Route exact path={"/rules"} component={Rules}/>
                        <Route exact path={"/admin"} component={Admin}/>
                    </Switch>
                    <Footer/>
                </Router>
            </SeasonProvider>
        </div>
    );
}

export default App;
