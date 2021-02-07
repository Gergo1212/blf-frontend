import React, {useContext, useEffect, useState} from "react";
import {UtilContext} from "../../context/UtilContext";
import {useParams} from "react-router";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function TeamAdmin() {

    const {requestGet, elements} = useContext(UtilContext);
    const {id} = useParams();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        requestGet(`http://localhost:8091/team/${id}`)
    }, []);

    const listTeamMembers = (team) => {
        if (team.teamMember !== undefined) {
            return elements.teamMember.map((member) => (
                member.Aktív === 1 ?
                    <li>{member.id} | {member.name}</li>
                    : <li style={{color: "red"}}>{member.id} | {member.name}</li>
            ))
        }
    }

    return (
        <React.Fragment>
            <AdminNavbar/>
            <Calendar onChange={setDate} value={date}/>
            <TableCreator inputObjects={[elements]}/>
            <div style={{color: "white"}}>{listTeamMembers(elements)}</div>
        </React.Fragment>
    )
}

export default TeamAdmin;