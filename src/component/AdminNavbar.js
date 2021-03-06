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
            link: "/admin/event"
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
            link: "/admin/statistic"
        },
    ]

    const listAdminMenuButtons = () => {

        return buttons.map((button, index) => (
            <a key={index} href={button.link}>
                <button key={index} className={"button roll-in-top"}>{button.name}</button>
            </a>
        ))
    }

    return (
        <div className={"navbarDiv"}>
            {listAdminMenuButtons()}
        </div>
    )
}

export default AdminNavbar;

