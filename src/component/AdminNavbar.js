import {Button} from "react-bootstrap";
import React from "react";
import "../style/AdminNavbar.css"
function AdminNavbar() {

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
            name: "Felhasználók",
            link: "/admin/user"
        },
        {
            name: "Statisztika",
            link: "/admin/stat"
        },
    ]

    const listAdminMenuButtons =
        buttons.map((button, index) => (
            <Button variant={"warning"} accessKey={index}
                    href={button.link}>{button.name}</Button>
        ))

    return (
        <div className={"adminNavbarElements"}>
            {listAdminMenuButtons}
        </div>
    )
}
export default AdminNavbar;

