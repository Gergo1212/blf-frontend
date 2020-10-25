import React from "react";
import Button from "react-bootstrap/cjs/Button";

const HeaderStyle = {
    color: "white",
    padding: "2%",
    width: "100%",
    textAlign: "center",
    borderBottom: "solid rgba(240, 240, 240, .20)",
    borderWidth: "0.1em",
    backgroundColor: "#010101",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
}

const TitleStyle = {
    position: "absolute",
    left:"50%",
    transform:"translateX(-50%)"
}

function Header() {
    return (
        <React.Fragment>
            <div style={HeaderStyle}>
                <div style={TitleStyle}>
                    Hello
                </div>
                <Button variant={"warning"} href={"/home"}>Home</Button>
                <Button variant={"warning"} href={"/login"}>Login</Button>
            </div>
        </React.Fragment>
    )
}

export default Header;