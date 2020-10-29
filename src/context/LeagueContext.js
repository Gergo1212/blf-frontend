import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const LeagueContext = createContext();

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
        <LeagueContext.Provider value={{leagues}}>
            {props.children}
        </LeagueContext.Provider>
    )
}