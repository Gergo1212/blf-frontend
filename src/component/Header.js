import React from "react";
import Button from "react-bootstrap/cjs/Button";
import "../style/Header.css"

function Header() {

    return (
        <React.Fragment>
            <div className="headerDiv">
                <a href={"/"}>
                    <img src="/labda_01.png" />
                </a>
                <div className={"socialDiv"}>
                    <a href="https://hu-hu.facebook.com/pages/category/Sports-Club/BLF-KK-163706773676495/"
                       className="fa fa-facebook aaa" target="_blank"/>
                    <Button variant={"warning"} href={"/login"}>Belépés</Button>
                    <Button variant={"warning"} href={"/admin"}>Szerkesztő</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;