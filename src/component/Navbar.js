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

    const general = ["Házirend", "Tagdíjfizetés", "Felszerelés",
        "Tao pályázat", "Támogatóink"];

    const introduction = ["Klubtörténet", "Célkitűzések",
        "Alapszabály"];

    const contact = [
        {
            name: "Munkatársak",
            link: "/munkatarsak"
        },
        {
            name: "Termek",
            link: "/termek"
        }
    ];

    const program = [
        {
            name: "Egyesületi",
            link: "/egyesületi"
        },
        {
            name: "Csapatok",
            link: "/csapatok"
        },
        {
            name: "Hanga Ádám terem",
            link: "/hanga"
        }
    ];

    const results = [
        {
            name: "Egyesületi",
            link: "/egyesületieredmeny"
        },
        {
            name: "Csapatok",
            link: "/csapateredmeny"
        }
    ];

    const links = [
        {
            name: "MKOSZ",
            link: "http://www.hunbasket.hu/"
        },
        {
            name: "BKSZ",
            link: "http://megye.hunbasket.hu/budapest"
        },
        {
            name: "PMKSZ",
            link: "http://megye.hunbasket.hu/pest"
        },
        {
            name: "FIBA",
            link: "http://www.fiba.basketball/"
        },
        {
            name: "NBA",
            link: "https://www.nba.com/"
        },
    ];

    const listTeams =
        teams.map((team, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{team}</Dropdown.Item>
        ))

    const listGeneral =
        general.map((element, index) => (
            <Dropdown.Item eventKey={index} as={"button"}>{element}</Dropdown.Item>
        ))

    const listIntroduction =
        introduction.map((element, index) => (
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
            <DropdownButton title={"Bemutatkozás"} as={"ButtonGroup"}
                                                 variant={"warning"}>{listIntroduction}</DropdownButton>
            <DropdownButton title={"Tudnivalók"} as={"ButtonGroup"} variant={"warning"}>{listGeneral}</DropdownButton>
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