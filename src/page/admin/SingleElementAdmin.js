import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router"
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import {RequestContext} from "../../context/RequestContext";

function SingleElementAdmin() {

    const {requestPut, requestGet, elements} = useContext(RequestContext)
    const {service, id} = useParams();
    const [inputs, setInputs] = useState({});
    let urlForElement;
    let urlForUpdate;


    if (service === "player" || service === "coach") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
    }

    if (service === "player") {
        urlForUpdate = `http://localhost:8762/people/${service}/edit/${id}`;
    } else {
        urlForUpdate = `http://localhost:8762/game/${service}/edit/${id}`;
    }


    useEffect(() => {
        requestGet(urlForElement);
    }, [urlForElement])


    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    const inputFieldCreator =

        Object.keys(elements).map((fieldName, index) => (
            <div key={index}>
                <label>{fieldName}</label>
                <input type="text" name={fieldName} defaultValue={elements[fieldName]}
                       onChange={handleInputFieldChange}/>
            </div>
        ))


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[elements]}/>
            <form>
                {inputFieldCreator}
            </form>
            <button onClick={() => requestPut(urlForUpdate, inputs)}>Submit</button>
        </React.Fragment>
    )
}

export default SingleElementAdmin;