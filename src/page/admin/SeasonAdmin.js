import React from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import useFetchData from "../../api/ApiCallFetch";

function SeasonAdmin() {

    const urlForFetchSeasons = "http://localhost:8762/game/season";
    const seasons = useFetchData(urlForFetchSeasons);


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={seasons} prefix="season"/>
        </React.Fragment>
    )
}

export default SeasonAdmin;
