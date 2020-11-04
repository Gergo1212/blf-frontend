import React from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import useFetchAllData from "../../api/ApiCallFetch";

function SeasonAdmin() {

    const urlForFetchSeasons = "http://localhost:8762/game/season";
    const seasons = useFetchAllData(urlForFetchSeasons);

    console.log(seasons);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={seasons} prefix="season"/>
        </React.Fragment>
    )
}

export default SeasonAdmin;
