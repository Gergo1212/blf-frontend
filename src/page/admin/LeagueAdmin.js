import React from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import useFetchAllData from "../../api/ApiCallFetch";

function LeagueAdmin() {

    const urlForFetchLeagues = "http://localhost:8762/game/league";
    const leagues = useFetchAllData(urlForFetchLeagues);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={leagues} preFix="league"/>
        </React.Fragment>
    )
}

export default LeagueAdmin;
