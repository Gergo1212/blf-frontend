import React, {useContext} from "react";
import {LeagueContext} from "../../context/LeagueContext";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import "../../style/Leagueadmin.css"
function LeagueAdmin() {

    const {leagues} = useContext(LeagueContext);
    let x =
        {
            name: "teszt",
            id: 123,
            csapat: "teszt csapat",
            liga: "teszt liga",
        }

    let y = [];
    for (let i = 0; i < 16; i++) {
        y.push(x)
    }
    return (
        <div className={"leagueAdminDiv"}>
            <AdminNavbar/>
            <TableCreator inputObjects={y} preFix="league"/>
        </div>


    )
}

export default LeagueAdmin;
