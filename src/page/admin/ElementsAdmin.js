import React, {useContext, useEffect, useState} from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {RequestContext} from "../../context/RequestContext";
import {SeasonContext} from "../../context/SeasonContext";

function ElementsAdmin() {

    const {requestGet, requestPost, elements, pages} = useContext(RequestContext);
    const {seasons} = useContext(SeasonContext);
    const {service} = useParams();
    const [inputs, setInputs] = useState({});

    let urlForElements = `http://localhost:8091/${service}`;
    let urlForAddNewElement = `http://localhost:8091/${service}/add`;


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

    const seasonDropDown =
        seasons.map((season, index) => (
            <option key={index}>{season.name}</option>
        ))

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

                (//TODO looking a better solution as this might be clumsy!!!!)
            </div>
            {service !== "season" ?
                <div>
                    <label style={{color: "white"}}>Válassz egy szezont: </label>
                    <select>
                        {seasonDropDown}
                    </select>
                </div> : null
            }
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementsAdmin;