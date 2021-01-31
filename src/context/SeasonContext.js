import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const SeasonContext = createContext([]);

function SeasonContextProvider(props) {

    const urlForSeasons = "http://localhost:8091/season"
    const [seasons, setSeasons] = useState([]);


    useEffect(() => {
        axios
            .get(urlForSeasons)
            .then((response) => setSeasons(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <SeasonContext.Provider value={{seasons}}>
            {props.children}
        </SeasonContext.Provider>
    )
}

export default SeasonContextProvider;