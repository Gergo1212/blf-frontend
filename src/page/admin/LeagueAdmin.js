import React, {useContext} from "react";
import {LeagueContext} from "../../context/LeagueContext";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";

function LeagueAdmin() {

    const {leagues} = useContext(LeagueContext);

    let x =
        {
            name: "teszt",
            id: 123,
            csapat: "teszt csapat",
            liga: "teszt liga",
        }

    let testArray = [];

    for (let i = 0; i < 16; i++) {
        testArray.push(x)
    }


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={testArray} preFix="league"/>
        </React.Fragment>
    )
}

export default LeagueAdmin;
