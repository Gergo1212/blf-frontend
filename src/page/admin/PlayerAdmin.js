/*
import React, {useEffect, useState} from "react";
import axios from 'axios';
import AdminNavbar from "../../component/AdminNavbar";
import TableCreator from "../../component/TableCreator";

function PlayerAdmin() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8762/people/player")
            .then((response) => setPlayers(response.data))
            .catch((error) => console.log(error))
    })

    console.log(players)

    return (
        <React.Fragment>
            <div className={"renderDiv"}>
                <AdminNavbar/>
                <TableCreator inputObjects={players} prefix="player"/>
            </div>
        </React.Fragment>
    )
}

export default PlayerAdmin;*/
