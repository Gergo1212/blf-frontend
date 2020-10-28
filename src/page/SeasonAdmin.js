import React, {useContext} from "react";
import {SeasonContext} from "../context/SeasonContext";
import axios from "axios";
import {element} from "prop-types";

function SeasonAdmin() {

    const {seasons} = useContext(SeasonContext);

    const listSeasons =
        seasons.map((season) => (
            <tr>
                <td key={season.id}>{season.id}</td>
                <td>{season.date}</td>
            </tr>
        ));

       const seasonToSend = {
           date: "123456-78910"
       }
       const addSeason = () => {
           axios.post("http://localhost:8762/game/season/add", seasonToSend,{
               "Content-Type": "application/json;charset=UTF-8;"
               }
           )
               .then(response => console.log(response))
               .catch((error) => console.log(error))
       }
    function listColumns() {

        if (seasons.length !== 0) {
            return Object.keys((seasons[0])).map((property, index) => (
                <th key={index}>{property}</th>
            ))
        } else {
            return "EMPTY SEASONS";
        }
    }

    return (
        <div>
             <button onClick={addSeason}>ADDSEASON</button>
            <table>
                <thead>
                <tr>
                    {listColumns()}
                </tr>
                </thead>
                <tbody>
                {seasons && listSeasons}
                </tbody>
            </table>
        </div>

    )
}

export default SeasonAdmin;