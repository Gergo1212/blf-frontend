import React from "react";

function Navbar() {

    const teams = [
        {
            name: "Előkészítő",
            link: "/elokeszito"
        }, {
            name: "Mini",
            link: "/mini"
        }, {
            name: "Gyermek",
            link: "/gyermek"
        }, {
            name: "Serdülő",
            link: "/serdulo"
        }, {
            name: "Kadet",
            link: "/kadet"
        }, {
            name: "Junior",
            link: "/junior"
        }, {
            name: "Felnőtt",
            link: "/felnott"
        }
    ];

    const general = [
        {
            name: "Házirend",
            link: "/hazirend"
        }, {
            name: "Tagdíjfizetés",
            link: "/tagdij"
        }, {
            name: "Felszerelés",
            link: "/felszereles"
        }, {
            name: "Tao pályázat",
            link: "/tao"
        }, {
            name: "Támogatóink",
            link: "/tamogatoink"
        }
    ];

    const introduction = [
        {
            name: "Klubtörténet",
            link: "/tortenet"
        },
        {
            name: "Célkitűzések",
            link: "/celkituzesek"
        },
        {
            name: "Alapszabály",
            link: "/alapszabaly"
        }
    ];

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

    const navbarButtonNames = ["Bemutatkozás", "Tudnivalók", "Kapcsolat",
        "Program", "Eredmények", "Csapatok", "Linkek"];

    const categories = [introduction, general, contact, program, results, teams, links];

    const buttonCreator =
        navbarButtonNames.map((buttonName, index) => (
            <div className={"dropDown"}>
                <button className={"button dropBtn"}>{buttonName}
                    <i className={"fas fa-caret-down"}/>
                </button>
                <div className={"dropDownContent"}>
                    {categories[index].map((element) => (
                        <a href={element.link} target="_blank"
                           rel="noopener noreferrer">{element.name}</a>
                    ))}
                </div>
            </div>
        ))


    return (
        <div className={"navbarDiv"}>
            {buttonCreator}
            <button className={"button"}>Statisztika</button>
            <button className={"button"}>Edzések</button>
            <button className={"button"}>Játékosok</button>
        </div>
    )
}

export default Navbar;