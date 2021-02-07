import React, {useContext, useEffect, useMemo, useState} from "react";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import {useParams} from "react-router";
import {UtilContext} from "../../context/UtilContext";
import {SeasonContext} from "../../context/SeasonContext";
import SeasonAdmin from "./SeasonAdmin";
import {ActualLeagueContext} from "../../context/ActualLeaguesContext";

import {ActualTeamsContext} from "../../context/ActualTeamsContext";
import Calendar from "react-calendar";

function ElementsAdmin() {

    const {
        requestGet, requestPost, requestPostSearch, elements,
        fieldNamesToIgnore, dropdownFields
    } = useContext(UtilContext);
    const {seasons} = useContext(SeasonContext);
    const {actualLeagues} = useContext(ActualLeagueContext);
    const {actualTeams} = useContext(ActualTeamsContext);

    const {service} = useParams();
    const [inputs, setInputs] = useState({});
    const [seasonId, setSeasonId] = useState(null);
    const [eventDate, setEventDate] = useState(new Date());
    const [birthdate, setBirthdate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    const urlForElements = `http://localhost:8091/${service}`;
    const urlForSearchBySeasonAndInput = urlForElements + `/search/`;

    const dropdownValues = {
        "league": actualLeagues, "awayTeam": actualTeams,
        "homeTeam": actualTeams,
        "isBlfTeam": [
            {
                "name": "Yes",
                "value": "1"
            },
            {
                "name": "No",
                "value": "0"
            }],
        "isActive": [
            {
                "name": "Yes",
                "value": "1"
            },
            {
                "name": "No",
                "value": "0"
            }]
    }


    useEffect(() => {
        requestGet(urlForElements)
    }, [])


    const calendarCreator = () => {
        if (elements.length > 0) {
            let fieldNames = Object.keys(elements[0]);

            return (fieldNames.map((fieldName, index) => {
                    if (fieldName === "eventDate") {
                        return (
                            <div className="text"> {fieldName}
                                <Calendar onChange={(event) =>
                                    handleCalendarChange(event, fieldName, setEventDate)} value={eventDate}/>
                            </div>
                        )
                    } else if (fieldName === "birthdate") {
                        return (
                            <div className="text"> {fieldName}
                                <Calendar onChange={(event) =>
                                    handleCalendarChange(event, fieldName, setBirthdate)} value={birthdate}/>
                            </div>
                        )
                    } else if (fieldName === "startDate") {
                        return (
                            <div className="text"> {fieldName}
                                <Calendar onChange={(event) =>
                                    handleCalendarChange(event, fieldName, setStartDate)} value={startDate}/>
                            </div>
                        )
                    }
                }
            ))
        }
    }

    const handleCalendarChange = (event, fieldName, setter) => {
        setter(event)
        const correctDateFormat = new Date(event.getTime() +
            Math.abs(event.getTimezoneOffset() * 60000)).toJSON().slice(0, 10);

        if (fieldName === "startDate") {
            setInputs({...inputs, [fieldName]: event.getFullYear().toString()})
        } else {
            setInputs({...inputs, [fieldName]: correctDateFormat})
        }
    }

    const inputFieldCreator = () => {
        if (elements.length > 0) {
            let fieldNames = Object.keys(elements[0])

            return fieldNames.map((fieldName, index) => (

                !fieldNamesToIgnore.includes(fieldName) ?
                    <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               placeholder={fieldName}
                               onChange={handleInputFieldChange}
                        />
                    </div> : null

            ))

        }
    }

    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const keys = Object.keys(dropdownValues);

        if (keys.includes(name) && name !== "isActive" && name !== "isBlfTeam") {
            let getId = (event.target.children[event.target.selectedIndex].dataset.id);
            setInputs({...inputs, [name]: {id: getId}});
        } else {
            setInputs({...inputs, [name]: value});
        }
    }

    const handleSearchFieldChange = (event) => {

        let searchFieldValue = {"input": event.target.value};

        if (seasonId !== null) {
            requestPostSearch(urlForSearchBySeasonAndInput + seasonId, searchFieldValue)
        } else {
            requestPostSearch(urlForSearchBySeasonAndInput, searchFieldValue)
        }
    }

    const dropdownCreator = (requiredElements) => {

        return (
            <React.Fragment>
                <option selected disabled hidden>Válassz</option>
                {requiredElements.map((element, index) => (
                    <option key={index} data-id={element.id} value={element.value}>{element.name}</option>
                ))}
            </React.Fragment>
        )
    }

    const optionalDropdownCreator = () => {

        if (elements.length > 0) {
            let fieldNames = Object.keys(elements[0]);

            return fieldNames.map((fieldName, index) => (
                dropdownFields.includes(fieldName) ?

                    <div className="inputFieldPairsDiv" key={index}>
                        <label className="text">{fieldName} :</label>
                        <select onChange={handleInputFieldChange} name={fieldName}>
                            {dropdownCreator(dropdownValues[fieldName])}
                        </select>
                    </div> : null
            ))
        }
    }

    const seasonDropdownHandler = (event) => {

        let getId = Number(event.target.children[event.target.selectedIndex].dataset.id);

        setSeasonId(getId);
        requestPostSearch(urlForSearchBySeasonAndInput + getId);
    }

    if (service === "season") {
        return (
            <SeasonAdmin/>
        )

    } else {

        return (
            <React.Fragment>
                <AdminNavbar/>
                <div className="inputContainer">
                    <form className="inputFieldsDiv">
                        {optionalDropdownCreator()}{calendarCreator()}{inputFieldCreator()}
                    </form>
                    <button className={"inputSubmitButton"}
                            onClick={() => requestPost(urlForElements, inputs)}>Hozzáadás
                    </button>
                </div>
                <div>
                    <label className="text">Keresés szezon szerint:</label>
                    <select onChange={seasonDropdownHandler}>
                        {dropdownCreator(seasons)}
                    </select>
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
