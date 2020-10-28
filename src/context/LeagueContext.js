import React, {useEffect, useState} from "react";
import axios from "axios";
import {SeasonContext} from "./SeasonContext";

export const LeagueProvider = (props) =>{
    const urlForLeagues = "http://localhost:8762/game/league";

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {

        axios.get(urlForLeagues)
            .then((response) =>
                setLeagues(response.data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <SeasonContext.Provider value={{leagues}}>
            {props.children}
        </SeasonContext.Provider>
    )
}