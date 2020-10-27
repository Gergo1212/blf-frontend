import React, {useContext, useEffect, useState} from "react";
import {SeasonContext} from "../context/SeasonContext";
import axios from "axios";

function Admin() {

    const {seasons} = useContext(SeasonContext);

    const listSeasons =
        seasons.map((season) => (
            <tr>
                <td key={season.id}>{season.id}</td>
                <td>{season.date}</td>
            </tr>
        ));

    const addSeason = () => {
        axios.post("http://localhost:8091/season/add",
            {
                date: "2222-2345"
            })

    }

    return (
        <div>
            <button onClick={addSeason}>ADDSEASON</button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {seasons && listSeasons}
                </tbody>
            </table>
        </div>

    )
}

export default Admin;