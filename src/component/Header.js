import React from "react";
import Button from "react-bootstrap/cjs/Button";

function Header() {

    const HeaderStyle = {
        color: "white",
        padding: "1% 2%",
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        borderBottom: "solid rgba(240, 240, 240, .20)",
        borderWidth: "0.1em",
        backgroundColor: "#010101",
        //backgroundColor: "#FFE909",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundImage:"url(/BLFHeader.png)",
    }

    /*    const TitleStyle = {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
        }*/

    const socialIconStyle = {
        fontSize: "30px",
        width: "30px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "50%",
    }
    const imageStyle = {
        width: "70px",
        height: "50px",
    }

    const divStyle = {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-around",
        width: "20%",

    }

    return (
        <React.Fragment>
            <div style={HeaderStyle}>

                <a href={"/"}>
                    <img src="/labda_01.png" style={imageStyle}/>
                </a>
                <div style={divStyle}>
                    <a href="https://hu-hu.facebook.com/pages/category/Sports-Club/BLF-KK-163706773676495/"
                       className="fa fa-facebook" style={socialIconStyle}/>
                    <Button variant={"warning"} href={"/login"}>Belépés</Button>
                    <Button variant={"warning"} href={"/admin"}>Szerkesztő</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;