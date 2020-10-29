import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const TeamContext = createContext();


export const TeamProvider = (props) => {

    const urlForTeams = "http://localhost:8762/game/team";

    const [teams, setTeams] = useState([]);

    useEffect(() => {

        axios.get(urlForTeams)
            .then((response) =>
                setTeams(response.data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <TeamContext.Provider value={{teams}}>
            {props.children}
        </TeamContext.Provider>
    )
}