import React from 'react';
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Slide from "./component/Slide";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Rules from "./page/Rules";

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
            <Router>
                <Header/>
                <Navbar/>
                <Switch>
                    <Route exact path={"/rules"} component={Rules}/>
                </Switch>
                <Slide/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
