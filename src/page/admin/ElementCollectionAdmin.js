import React from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {CreateRequest} from "../../api/FunctionCollection";

function ElementCollectionAdmin() {

    const {service} = useParams();

    let urlForElements;

    if (service === "player") {
        urlForElements = `http://localhost:8762/people/${service}`;
    } else {
        urlForElements = `http://localhost:8762/game/${service}`;
    }


    const elements = CreateRequest(urlForElements, "GET");

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementCollectionAdmin;