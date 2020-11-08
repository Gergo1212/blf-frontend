import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Rules from "./page/Rules";
import Main from "./page/Main";
import Admin from "./page/admin/Admin";
import SingleElementAdmin from "./page/admin/SingleElementAdmin";
import ElementsAdmin from "./page/admin/ElementsAdmin";


function App() {

    return (
        <div className="App">
            <Router>
                <Header/>
                <Navbar/>
                <Switch>
                    <Route exact path={"/admin"} component={Admin}/>
                    <Route exact path={"/admin/:service"} component={ElementsAdmin}/>
                    <Route exact path={"/admin/:service/:id"} component={SingleElementAdmin}/>
                    <Route exact path={"/"} component={Main}/>
                    <Route exact path={"/rules"} component={Rules}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
