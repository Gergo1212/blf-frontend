import React from 'react';
import Header from "./component/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const appStyle = {
    width: "100vw",
    //Todo 100% height --> with full content
    height: "100vh",
    backgroundColor: "#010101",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 4%"
}

function App() {
    return (
        <div style={appStyle} className="App">
            <Header/>
        </div>
    );
}

export default App;
