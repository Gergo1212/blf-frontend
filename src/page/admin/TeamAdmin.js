import React, {useContext} from "react";
import TableCreator from "../../component/TableCreator";
import {TeamContext} from "../../context/TeamContext";
import AdminNavbar from "../../component/AdminNavbar";


function TeamAdmin() {

    const {teams} = useContext(TeamContext);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={teams} prefix="season"/>
        </React.Fragment>


    )
}


export default TeamAdmin;
