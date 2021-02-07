import React, {useContext, useEffect, useState} from "react";
import {UtilContext} from "../../context/UtilContext";
import {useParams} from "react-router";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";

function TeamAdmin() {

    const {requestGet, requestGetForPlayers, elements, fieldNamesToIgnore} = useContext(UtilContext);
    const {id} = useParams();
    const [players, setPlayers] = useState([]);
    const [inputs, setInputs] = useState({});
    const urlForTeam = `http://localhost:8091/team/${id}`;
    const urlForPlayers = "http://localhost:8091/player";

    useEffect(() => {
        requestGet(urlForTeam)
        getPlayers()
    }, []);

    const listTeamMembers = (team) => {
        if (team.teamMember !== undefined) {
            return elements.teamMember.map((member) => (
                member.isActive === 1 ?
                    <li>{member.id} | {member.name}</li>
                    : <li style={{color: "red"}}>{member.id} | {member.name}</li>
            ))
        }
    }

    const getPlayers = () => {
        axios.get(urlForPlayers)
            .then((response) => setPlayers(response.data))
            .catch((e) => console.log(e))
    }

    const playerSelector = () => {

        if (players.length > 0) {

            return (
                <select onChange={e => playerSender(e)}>
                    <option selected disabled hidden>Játékosok</option>
                    {players.map((element, index) => (
                        <option key={index} value={element.id}>{element.name} {element.id}</option>
                    ))
                    }
                </select>
            )
        }
    }

    const playerSender = (event) => {
        let playerId = event.target.value;
        let urlForTeamMember = `http://localhost:8091/teammember/add/${id}/${playerId}`

        requestGetForPlayers(urlForTeamMember, urlForTeam);
    }

    const inputFieldCreator = () => {

        return Object.keys(elements).map((fieldName, index) => (

                !fieldNamesToIgnore.includes(fieldName) ?
                    <div className="inputFieldPairsDiv" key={index}>
                        <label className="inputFieldTitle">{fieldName}</label>
                        <input className="inputField" type="text" name={fieldName}
                               defaultValue={elements[fieldName]}
                               onChange={handleInputFieldChange}/>
                    </div> : null
            )
        )
    }

    const handleInputFieldChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value});
    }


    return (
        <React.Fragment>
            <AdminNavbar/>
            <div> {inputFieldCreator()}</div>
            <div className="text">
                {playerSelector()}
            </div>
            <TableCreator inputObjects={[elements]}/>
            <div style={{color: "white"}}>{listTeamMembers(elements)}</div>
        </React.Fragment>
    )
}

export default TeamAdmin;