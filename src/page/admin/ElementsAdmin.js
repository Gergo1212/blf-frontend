import React, {useContext, useEffect, useState} from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {RequestContext} from "../../context/RequestContext";
import {SeasonContext} from "../../context/SeasonContext";
import SeasonAdmin from "./SeasonAdmin";

function ElementsAdmin() {

    const {requestGet, requestPost, requestPostSearch, elements} = useContext(RequestContext);
    const {seasons} = useContext(SeasonContext);
    const {service} = useParams();
    const [inputs, setInputs] = useState({});
    const [seasonId, setSeasonId] = useState(null);

    let urlForElements = `http://localhost:8091/${service}`;
    let urlForSearchBySeasonAndInput = urlForElements + `/search/`;


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
        let searchFieldValue = {"input": event.target.value};

        if (seasonId !== null) {
            requestPostSearch(urlForSearchBySeasonAndInput + seasonId, searchFieldValue)
        } else {
            requestPostSearch(urlForSearchBySeasonAndInput, searchFieldValue)
        }
    }

    const seasonsDropDown =
        seasons.map((season, index) => (
            <option key={index} data-id={season.id}>{season.name}</option>
        ))



    if (service === "season") {
        return (
            <SeasonAdmin/>
        )

    } else {

        return (
            <React.Fragment>
                <AdminNavbar/>
                <div className="inputContainer">
                    <form className="inputFieldsDiv">{inputFieldCreator()}</form>
                    <button className={"inputSubmitButton"}
                            onClick={() => requestPost(urlForElements, inputs)}>Hozzáadás
                    </button>
                </div>
                <div>
                    <label style={{color: "white"}}>Válassz egy szezont: </label>
                    <select onChange={dropDownHandler}>{seasonsDropDown}</select>
                </div>
                <div>
                    <input type="text" onChange={handleSearchFieldChange} placeholder="Keresés"/>
                </div>
                <TableCreator inputObjects={elements} prefix="currentElement"/>
            </React.Fragment>
        )
    }
}

export default ElementsAdmin;
