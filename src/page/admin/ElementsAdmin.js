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

            return Object.keys(elements[0]).map((fieldName, index) => {

                if (fieldName !== "id") {
                    return <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               defaultValue={fieldName}
                               onChange={handleInputFieldChange}
                        />
                    </div>
                }
                return null
            })
        }
    }

    return (
        <React.Fragment>
            <AdminNavbar/>
            <button className={"button"}>Új {service} hozzáadása</button>
            <div className="inputContainer">
                <form className="inputFieldsDiv">
                    {inputFieldCreator()}
                </form>
                <button className="inputSubmitButton"
                        onClick={() => requestPost(urlForAddNewElement, inputs)}>
                    Hozzáadás
                </button>
            </div>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementsAdmin;