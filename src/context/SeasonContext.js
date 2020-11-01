import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const SeasonContext = createContext();


export const SeasonProvider = (props) => {

    const urlForSeasons = "http://localhost:8762/game/season";

    const [seasons, setSeasons] = useState([]);

    useEffect(() => {

        axios.get(urlForSeasons)
            .then((response) =>
                setSeasons(response.data))
            .catch((error) => console.log(error));
    }, [seasons]);


    return (
        <SeasonContext.Provider value={{seasons}}>
            {props.children}
        </SeasonContext.Provider>
    )
}