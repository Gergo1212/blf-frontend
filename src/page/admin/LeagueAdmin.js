import React, {useContext} from "react";
import {LeagueContext} from "../../context/LeagueContext";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";

function LeagueAdmin() {

    const {leagues} = useContext(LeagueContext);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={leagues} preFix="league"/>
        </React.Fragment>
    )
}

export default LeagueAdmin;
