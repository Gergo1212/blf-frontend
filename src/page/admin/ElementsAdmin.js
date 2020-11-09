import React, {useContext, useEffect, useState} from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {RequestContext} from "../../context/RequestContext";

function ElementsAdmin() {

    const {requestGet, requestPost, elements} = useContext(RequestContext)
    const {service} = useParams();
    const [inputs, setInputs] = useState({});

    let urlForElements;
    let urlForAddNewElement;

    if (service === "player" || service === "coach") {
        urlForElements = `http://localhost:8762/people/${service}`;
        urlForAddNewElement = `http://localhost:8762/people/${service}/add`;
    } else {
        urlForElements = `http://localhost:8762/game/${service}`;
        urlForAddNewElement = `http://localhost:8762/game/${service}/add`;
    }


    useEffect(() => {
        requestGet(urlForElements)
    }, [urlForElements])


    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    function inputFieldCreator() {
        if (elements.length > 0) {

            return Object.keys(elements[0]).map((fieldName, index) => (
                <div key={index}>
                    <label>{fieldName}</label>
                    <input type="text" name={fieldName} defaultValue={fieldName}
                           onChange={handleInputFieldChange}
                    />
                </div>
            ))
        }
    }

    return (
        <React.Fragment>
            <AdminNavbar/>
            <button className={"button openModal"}>Új {service} hozzáadása</button>
            <div className={"modal"}>
                <div className={"modalContent"}>
                    <span className="close">&times;</span>
                    {inputFieldCreator()}
                    <button onClick={() => requestPost(urlForAddNewElement, inputs)}>Hozzáadás</button>
                </div>
            </div>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementsAdmin;