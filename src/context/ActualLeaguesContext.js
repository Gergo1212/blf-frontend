import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ActualLeagueContext = createContext([]);


function ActualLeagueContextProvider(props) {

    const urlForActualLeagues = "http://localhost:8091/league/latestSeason"
    const [actualLeagues, setActualLeagues] = useState([]);

    useEffect(() => {
            axios.get(urlForActualLeagues)
                .then((response) => setActualLeagues(response.data))
                .catch((error) => console.log(error));
        },[]
    )

    return (

        <ActualLeagueContext.Provider value={{actualLeagues}}>
            {props.children}
        </ActualLeagueContext.Provider>

    )
}

export default ActualLeagueContextProvider;

