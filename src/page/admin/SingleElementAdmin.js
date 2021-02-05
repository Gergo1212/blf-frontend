import React, {useContext, useEffect, useState} from "react";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import {UtilContext} from "../../context/UtilContext";
import {useParams} from "react-router";
import TeamAdmin from "./TeamAdmin";

function SingleElementAdmin() {

    const {requestPut, requestGet, requestDelete, elements, fieldNamesToIgnore} = useContext(UtilContext)
    const [inputs, setInputs] = useState({});
    const {service, id} = useParams();
    const urlForSingleElement = `http://localhost:8091/${service}/${id}`;


    useEffect(() => {
        requestGet(urlForSingleElement);
    }, [])

    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    const inputFieldCreator =
        Object.keys(elements).map((fieldName, index) => (

                !fieldNamesToIgnore.includes(fieldName) ?
                    <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               defaultValue={elements[fieldName]}
                               onChange={handleInputFieldChange}/>
                    </div> : null
            )
        )

    if (service === "team") {
        return <TeamAdmin/>
    } else {

        return (

            <React.Fragment>
                <AdminNavbar/>
                <TableCreator inputObjects={[elements]}/>
                <button onClick={() => requestDelete(urlForSingleElement)}>{service} törlése</button>
                <div className="inputContainer">
                    <form className="inputFieldsDiv">{inputFieldCreator}</form>
                </div>
                <button className="inputSubmitButton"
                        onClick={() => requestPut(urlForSingleElement, inputs)}>Módosítás
                </button>
            </React.Fragment>
        )
    }
}

export default SingleElementAdmin;