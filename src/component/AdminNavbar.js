import React from "react";

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
            <a href={button.link}>
                <button className={"button"}>{button.name}</button>
            </a>
        ))

    return (
        <div className={"navbarDiv"}>
            {listAdminMenuButtons}
        </div>
    )
}

export default AdminNavbar;

