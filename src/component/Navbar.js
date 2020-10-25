import React from "react";
import Button from "react-bootstrap/cjs/Button";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import Dropdown from "react-bootstrap/cjs/Dropdown";
import {number} from "prop-types";


function Navbar() {

    const navbarStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    }

    const navbarElements = ["Bemutatkozás", "Program", "Eredmények", "Kapcsolat",
        "Edzések", "Házirend", "Tagdíjfizetés", "Statisztika", "Játékosok"];

    const teams = ["Előkészítő", "Mini korosztály", "Gyermek korosztály", "Serdülő korosztály",
        "Kadett korosztály", "Junior korosztály", "Felnőtt korosztály"]

    const listMenuButtons =
        navbarElements.map((element, index) => (
            <Button key={index} variant={"warning"}>{element}</Button>
        ))

    const listTeams =
        teams.map((team, index) =>(
            <Dropdown.Item eventKey={index} as={"button"}>{team}</Dropdown.Item>
        ))

    return (
        <div style={navbarStyle}>
            {listMenuButtons}
            <DropdownButton title={"Csapatok"} as={ButtonGroup} variant={"warning"}>
                {listTeams}
            </DropdownButton>
        </div>
    )
}

export default Navbar;