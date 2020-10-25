import React from "react";


function Footer() {

    const footerStyle = {
        textAlign: "center",
        backgroundColor: "lightgrey",
        width: "100%",
        position:"absolute",
        bottom:0,
        height:"10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <footer style={footerStyle}>
            Footer Copyright Bla bla bla
        </footer>
    )
}

export default Footer;