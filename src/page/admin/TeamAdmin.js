import React, {useContext, useEffect} from "react";
import {UtilContext} from "../../context/UtilContext";
import {useParams} from "react-router";
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";

function TeamAdmin() {

    const {requestGet, elements} = useContext(UtilContext);
    const {id} = useParams();

    useEffect(() => {
        requestGet(`http://localhost:8091/team/${id}`)
    }, []);

    function listTeamMembers(team) {
        if (team.teamMember !== undefined) {
            return elements.teamMember.map((member) => (
                <li>{member.id} | {member.name}</li>
            ))
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={[elements]}/>
            <div style={{color: "white"}}>{listTeamMembers(elements)}</div>
        </React.Fragment>
    )
}

export default TeamAdmin;