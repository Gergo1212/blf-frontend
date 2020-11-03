import React from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import useFetchAllData from "../../api/ApiCallFetch";

function MatchAdmin() {

    const urlForFetchEvents = "http://localhost:8762/game/event";
    const [events] = useFetchAllData(urlForFetchEvents);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={events} prefix="event"/>
        </React.Fragment>
    )
}

export default MatchAdmin;