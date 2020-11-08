import React from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {CreateRequest} from "../../function/FunctionCollection";

function ElementsAdmin() {

    const {service} = useParams();

    let urlForElements;

    if (service === "player" || service === "coach") {
        urlForElements = `http://localhost:8762/people/${service}`;
    } else {
        urlForElements = `http://localhost:8762/game/${service}`;
    }

    const elements = CreateRequest(urlForElements, "GET");


/*

    const modalInputFieldCreator =
        Object.keys(elements[0]).map((fieldName, index) =>(
            <div key={index}>
                <label>{fieldName}</label>
                <input type="text" name={fieldName}/>
            </div>
        ))
*/



    return (
        <React.Fragment>
            <AdminNavbar/>
            <button className={"button"}>Új {service} hozzáadása</button>
            <div className={"modal"}>
                <div className={"modalContent"}>
                    <span className="close">&times;</span>
                    <button>Hozzáadás</button>
                </div>
            </div>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementsAdmin;