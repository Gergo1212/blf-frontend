import React, {useState} from "react";
import {useParams} from "react-router"
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import {CreateRequest} from "../../function/FunctionCollection";

function ElementAdmin() {

    const {service, id} = useParams();

    let urlForElement;

    if (service === "player") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
    }


    let urlForUpdate;

    if (service === "player") {
        urlForUpdate = `http://localhost:8762/people/${service}/edit/${id}`;
    } else {
        urlForUpdate = `http://localhost:8762/game/${service}/edit/${id}`;
    }

    const element = CreateRequest(urlForElement, "GET");

    const inputFieldCreator =
        Object.keys(element).map((fieldName, index) => (
            <div key={index}>
                <label>{fieldName}</label>
                <input type="text" name={fieldName} defaultValue={element[fieldName]}
                       onChange={handleChange}/>
            </div>
        ))


    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }


    function handleClick() {
        CreateRequest(urlForUpdate, "PUT", inputs);
    }

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[element]}/>
            <form style={{color: "white"}}>
                {inputFieldCreator}
            </form>
            <button onClick={handleClick()}>Submit</button>
        </React.Fragment>
    )
}

export default ElementAdmin;