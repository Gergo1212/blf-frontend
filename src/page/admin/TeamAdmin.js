import React, {useContext} from "react";
import TableCreator from "../../component/TableCreator";
import {TeamContext} from "../../context/TeamContext";
import AdminNavbar from "../../component/AdminNavbar";
import "../../style/Leagueadmin.css";


function TeamAdmin() {

    const {teams} = useContext(TeamContext);

    return (
        <div className={"leagueAdminDiv"}>
            <AdminNavbar/>
            <TableCreator inputObjects={teams} prefix="season"/>
        </div>

    )
}


export default TeamAdmin;
