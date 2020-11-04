import React from "react";
import {useParams} from "react-router"
import useFetchAllData from "../../api/ApiCallFetch";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";

function ElementAdmin() {

    const {service, id} = useParams();

    let urlForElement;

    if (service === "player") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
        //TODO környezeti vagy egy változóba
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
    }

    const element = useFetchAllData(urlForElement);

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[element]}/>
        </React.Fragment>
    )

}

export default ElementAdmin;