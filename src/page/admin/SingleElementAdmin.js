import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router"
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import {RequestContext} from "../../context/RequestContext";

function SingleElementAdmin() {

    const {requestPut, requestGet, requestDelete, elements} = useContext(RequestContext)
    const {service, id} = useParams();
    const [inputs, setInputs] = useState({});

    let urlForElement;
    let urlForUpdate;
    let urlForDelete;


    if (service === "player" || service === "coach") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
        urlForUpdate = `http://localhost:8762/people/${service}/edit/${id}`;
        urlForDelete = `http://localhost:8762/people/${service}/delete/${id}`;
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
        urlForUpdate = `http://localhost:8762/game/${service}/edit/${id}`;
        urlForDelete = `http://localhost:8762/game/${service}/delete/${id}`;
    }


    useEffect(() => {
        requestGet(urlForElement);
    }, [urlForElement])


    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    const inputFieldCreator =

        Object.keys(elements).map((fieldName, index) => {
                if (fieldName !== "id") {

                    return <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               defaultValue={elements[fieldName]}
                               onChange={handleInputFieldChange}/>
                    </div>
                }
                return null;
            }
        )


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[elements]}/>
            <button onClick={() => requestDelete(urlForDelete)}>{service} törlése</button>
            <div className="inputContainer">
                <form className="inputFieldsDiv">
                    {inputFieldCreator}
                </form>
            </div>
            <button className="inputSubmitButton"
                    onClick={() => requestPut(urlForUpdate, inputs)}>Módosítás
            </button>
        </React.Fragment>
    )
}

export default SingleElementAdmin;