import React from "react";

function Header() {

    return (
            <div className="headerDiv">
                <a href={"/"}>
                    <img className={"logo"} src={"/labda_01.png"} alt={"logo"}/>
                </a>
                <div className={"socialDiv"}>
                    <a href="https://hu-hu.facebook.com/pages/category/Sports-Club/BLF-KK-163706773676495/"
                       className="fab fa-facebook-f socialButton"/>
                    <a href={"/login"}>
                        <button className={"button"}>Belépés</button>
                    </a>
                    <a href={"/admin"}>
                        <button className={"button"}>Szerkesztő</button>
                    </a>
                </div>
            </div>
    )
}

export default Header;