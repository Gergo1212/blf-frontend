import React from "react";
import "../style/Header.css";

function Header() {

    return (
        <React.Fragment>
            <div className="headerDiv">
                <a href={"/"}>
                    <img src={"/labda_01.png"} alt={"logo"}/>
                </a>
                <div className={"socialDiv"}>
                    <a href="https://hu-hu.facebook.com/pages/category/Sports-Club/BLF-KK-163706773676495/"
                       className="fa fa-facebook socialButton" target="_blank" rel={"noopener"}/>
                    <a href={"/login"}>
                        <button className={"button"}>Belépés</button>
                    </a>
                    <a href={"/admin"}>
                        <button className={"button"}>Szerkesztő</button>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;