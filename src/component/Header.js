import React from "react";
import Button from "react-bootstrap/cjs/Button";

function Header() {

    const HeaderStyle = {
        color: "white",
        padding: "2%",
        width: "100%",
        textAlign: "center",
        borderBottom: "solid rgba(240, 240, 240, .20)",
        borderWidth: "0.1em",
        backgroundColor: "#010101",
        //backgroundColor: "#FFE909",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        //background:"url(/BLFHeader.png)",
    }

    const TitleStyle = {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    }
    const socialIconStyle = {
        //right: "0",
        //padding: "20px",
        fontSize: "30px",
        width: "30px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "50%",
    }

    return (
        <React.Fragment>
            <div style={HeaderStyle}>

                <Button variant={"warning"} href={"/home"}>Home</Button>

                <div>
                    <a href="https://hu-hu.facebook.com/pages/category/Sports-Club/BLF-KK-163706773676495/"
                       className="fa fa-facebook" style={socialIconStyle}/>
                    <Button variant={"warning"} href={"/login"}>Login</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;