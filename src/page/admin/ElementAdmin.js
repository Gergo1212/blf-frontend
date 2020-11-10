import React, {useState} from "react";
import {useParams} from "react-router"
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import axios from "axios"
import useFetchData from "../../api/ApiCallFetch";

function ElementAdmin() {

    const {service, id} = useParams();

    let urlForElement;

    if (service === "player") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
    }

    const element = useFetchData(urlForElement);

    const inputFieldCreator =
        Object.keys(element).map((fieldName) => (
                <div className="inputFieldPairsDiv">
                    <label className="inputFieldTitle">{fieldName}</label>
                    <input className="inputField" type="text" name={fieldName} defaultValue={element[fieldName]}
                        onChange={handleChange}/>
                </div>

        ))



    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    let urlForUpdate;
    if (service === "player") {
        urlForUpdate = `http://localhost:8762/people/${service}/edit/${id}`;
    } else {
        urlForUpdate = `http://localhost:8762/game/${service}/edit/${id}`;
    }

    function w() {
        axios
            .put(urlForUpdate, inputs)
            .then((r) => console.log(r))
            .catch((err) => console.log(err))
    }


    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[element]}/>
            <div className="inputContainer">
                <form className="inputFieldsDiv" style={{color: "white"}}>
                    {inputFieldCreator}
                </form>
            </div>
            <button className="inputSubmitButton" onClick={w.bind(urlForUpdate, inputs)}>Submit</button>
        </React.Fragment>
    )
}

export default ElementAdmin;