/*
import React from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import useFetchData from "../../api/ApiCallFetch";
import {CreateRequest} from "../../api/FunctionCollection";

function SeasonAdmin() {

    const urlForFetchSeasons = "http://localhost:8762/game/season";
    //const seasons = useFetchData(urlForFetchSeasons);
    const seasons = CreateRequest(urlForFetchSeasons, "GET")


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={seasons} prefix="season"/>
        </React.Fragment>
    )
}

export default SeasonAdmin;
*/
