import React, {useContext, useEffect, useState} from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {RequestContext} from "../../context/RequestContext";
import {SeasonContext} from "../../context/SeasonContext";

function ElementsAdmin() {

    const {requestGet, requestPost, requestPostSearch, elements, pages} = useContext(RequestContext);
    const {seasons} = useContext(SeasonContext);
    const {service} = useParams();
    const [inputs, setInputs] = useState({});
    const [seasonId, setSeasonId] = useState(null);

    let urlForElements = `http://localhost:8091/${service}`;
    let urlForAddNewElement = `http://localhost:8091/${service}/add`;
    let urlForSearchBySeasonAndInput = `http://localhost:8091/${service}/search/`;

    useEffect(() => {
        requestGet(urlForElements)
    }, [])

    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }

    function inputFieldCreator() {

        if (elements.length > 0) {

            return Object.keys(elements[0]).map((fieldName, index) => (
                fieldName !== "id" ?

                    <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               defaultValue={fieldName}
                               onChange={handleInputFieldChange}
                        />
                    </div> : null
            ))
        }
    }

    const dropDownHandler = (event) => {
        event.preventDefault()
        let getId = Number(event.target.children[event.target.selectedIndex].dataset.id);

        setSeasonId(getId);
        requestPostSearch(urlForSearchBySeasonAndInput + getId);
    }

    const handleSearchFieldChange = (event) => {
        event.preventDefault();
        let objectFromFieldValue = {"input": event.target.value};

        seasonId !== null ? requestPostSearch(urlForSearchBySeasonAndInput + seasonId, objectFromFieldValue)
            : requestPostSearch(urlForSearchBySeasonAndInput, objectFromFieldValue);
    }

    const seasonsDropDown =
        seasons.map((season, index) => (
            <option key={index} data-id={season.id}>{season.name}</option>
        ))

    return (
        <React.Fragment>
            <AdminNavbar/>
            <button className={"button"}>Új {service} hozzáadása</button>
            <div className="inputContainer">
                <form className="inputFieldsDiv">
                    {inputFieldCreator()}
                </form>
                <button className={"inputSubmitButton"}
                        onClick={() => requestPost(urlForAddNewElement, inputs)}>
                    Hozzáadás
                </button>
            </div>

            (//TODO looking for a better solution as this might be clumsy!!!!)

            {service !== "season" ?
                <div>
                    <label style={{color: "white"}}>Válassz egy szezont: </label>
                    <select onChange={dropDownHandler}>
                        {seasonsDropDown}
                    </select>
                </div> : null
            }
            <div>
                <input type="text" onChange={handleSearchFieldChange} placeholder="Keresés"/>
            </div>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default ElementsAdmin;