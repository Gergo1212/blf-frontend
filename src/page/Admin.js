import React from "react";
import {Button} from "react-bootstrap";

function Admin() {

    const adminStyle = {
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
    const buttons = [
        {
            name: "Szezonok",
            link: "/admin/season"
        },
        {
            name: "Ligák",
            link: "/admin/league"
        },
        {
            name: "Meccsek",
            link: "/admin/match"
        },
        {
            name: "Játékosok",
            link: "/admin/player"
        },
        {
            name: "Csapatok",
            link: "/admin/team"
        },
        {
            name: "Csapattagok",
            link: "/admin/teammember"
        },
        {
            name: "Felhasználó",
            link: "/admin/user"
        },
        {
            name: "Statisztika",
            link: "/admin/stat"
        },
    ]

    const listMenuButtons =
        buttons.map((button, index) => (
            <Button variant={"warning"} accessKey={index}
                    href={button.link}>{button.name}</Button>
        ))

    return (
        <div>
            {listMenuButtons}
        </div>
    )
}

export default Admin;