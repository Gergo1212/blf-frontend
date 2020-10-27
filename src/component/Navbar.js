import React from "react";
import Button from "react-bootstrap/cjs/Button";
import DropdownButton from "react-bootstrap/cjs/DropdownButton";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import Dropdown from "react-bootstrap/cjs/Dropdown";


function Navbar() {

    const navbarStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: "1%"
    }


    const teams = ["Előkészítő", "Mini korosztály", "Gyermek korosztály", "Serdülő korosztály",
        "Kadett korosztály", "Junior korosztály", "Felnőtt korosztály"];

    const general = ["Házirend", "Tagdíjfizetés", "Felszerelés", "U11 és U12 Kupák",
        "PMKSZ fordulók", "Kőbányai Kenguru", "OSB fordulók", "III. Süni kupa", "II.Panda kupa",
        "Tao pályázat", "Támogatóink"];

    const indtroduction = ["Klubtörténet", "Célkitűzések", "Vezetők", "Edzők", "Segítők",
        "Alapszabály"];

    const contact = ["Munkatársak", "Termek"];

    const program = ["Egyesületi", "Csapatok", "Hanga Ádám terem"];

    const results = ["Egyesületi", "Csapatok"];

    const links = ["MKOSZ", "BKSZ", "PMKSZ", "Kőbányai Kenguru Kupa", "Fiú utánpótlás",
        "Leány utánpótlás", "Sajtó", "NBA", "Oktató oldalak"];

    const listTeams =
        teams.map((team, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{team}</Dropdown.Item>
        ))

    const listGeneral =
        general.map((element, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{element}</Dropdown.Item>
        ))

    const listIntroduction =
        indtroduction.map((element, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{element}</Dropdown.Item>
        ))

    const listContact =
        contact.map((contact, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{contact}</Dropdown.Item>
        ))

    const listPrograms =
        program.map((program, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{program}</Dropdown.Item>
        ))

    const listResults =
        results.map((result, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{result}</Dropdown.Item>
        ))

    const listLinks =
        links.map((link, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{link}</Dropdown.Item>
        ))


    return (
        <div style={navbarStyle}>
            <DropdownButton title={"Általános"} as={"ButtonGroup"} variant={"warning"}>{listGeneral}</DropdownButton>
            <DropdownButton title={"Bemutatkozás"} as={"ButtonGroup"} variant={"warning"}>{listIntroduction}</DropdownButton>
            <DropdownButton title={"Kapcsolat"} as={"ButtonGroup"} variant={"warning"}>{listContact}</DropdownButton>
            <DropdownButton title={"Program"} as={"ButtonGroup"} variant={"warning"}>{listPrograms}</DropdownButton>
            <DropdownButton title={"Eredmények"} as={"ButtonGroup"} variant={"warning"}>{listResults}</DropdownButton>
            <DropdownButton title={"Csapatok"} as={"ButtonGroup"} variant={"warning"}>{listTeams}</DropdownButton>
            <DropdownButton title={"Linkek"} as={"ButtonGroup"} variant={"warning"}>{listLinks}</DropdownButton>
            <Button variant={"warning"}>Statisztika</Button>
            <Button variant={"warning"}>Edzések</Button>
            <Button variant={"warning"} href={"/rules"}>Játékosok</Button>
        </div>
    )
}

export default Navbar;