import React from "react";


function Footer() {

    const footerStyle = {
        textAlign: "center",
        backgroundColor: "lightgrey",
        width: "100%",
        //position:"fixed",
        bottom:0,
        minHeight:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:"-50px"
    }

    return (
        <footer style={footerStyle}>
            Footer Copyright Bla bla bla
        </footer>
    )
}

export default Footer;