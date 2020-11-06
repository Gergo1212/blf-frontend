import React from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import useFetchData from "../../api/ApiCallFetch";

function StatAdmin() {

    const urlForFetchStatistics = "http://localhost:8762/game/statistic";
    const statistics = useFetchData(urlForFetchStatistics);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={statistics} prefix="statistic"/>
        </React.Fragment>
    )
}

export default StatAdmin;