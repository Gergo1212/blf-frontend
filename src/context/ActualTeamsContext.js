import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ActualTeamsContext = createContext([]);

function ActualTeamsContextProvider(props) {

    const urlForSeasons = "http://localhost:8091/team"
    const [actualTeams, setActualTeams] = useState([]);


    useEffect(() => {
        axios
            .get(urlForSeasons)
            .then((response) => setActualTeams(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ActualTeamsContext.Provider value={{actualTeams}}>
            {props.children}
        </ActualTeamsContext.Provider>
    )
}

export default ActualTeamsContextProvider;