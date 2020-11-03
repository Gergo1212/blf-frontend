import React from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import useFetchAllData from "../../api/ApiCallFetch";

function TeamAdmin() {

    const urlForFetchTeams = "http://localhost:8762/game/team";
    const [teams] = useFetchAllData(urlForFetchTeams);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={teams} prefix="team"/>
        </React.Fragment>
    )
}


export default TeamAdmin;
