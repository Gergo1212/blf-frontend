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
            valami: "afsfaf",
            liga: "nvc,x,nv",
        }

    let y =[];
    for (let i = 0; i < 16; i++) {
        y.push(x)
    }
    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={y} preFix="league"/>
        </React.Fragment>


    )
}

export default LeagueAdmin;
