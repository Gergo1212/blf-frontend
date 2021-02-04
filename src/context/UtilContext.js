import React, {createContext, useState} from "react";
import axios from "axios";

export const UtilContext = createContext([]);

function UtilContextProvider(props) {

    const [elements, setElements] = useState([]);
    const fieldNamesToIgnore = ["id", "season", "seasonName", "league", "homeTeam", "awayTeam", "isBlfTeam"];
    const dropdownFields = ["league", "homeTeam", "awayTeam", "isBlfTeam"]


    const requestGet = (url) => {
        axios
            .get(url)
            .then((response) => setElements(response.data))
            .catch((error) => console.log(error))
    }

    const requestPut = (url, data) => {
        axios
            .put(url, data)
            .then(() => requestGet(url))
            .catch((error) => console.log(error))
    }

    const requestPost = (url, data) => {
        axios
            .post(url, data)
            .then(() => requestGet(url))
            .catch((error) => console.log(error));
    }

    const requestPostSearch = (url, data) => {
        axios
            .post(url, data)
            .then((response) => setElements(response.data))
            .catch((error) => console.log(error));
    }

    const requestDelete = (url) => {
        axios
            .delete(url)
            .then(() => requestGet(url))
            .catch((error) => console.log(error))
    }

    const sorter = (event) => {

        let parentValue = event.currentTarget.parentNode.textContent.toString();
        let elementDataset = event.target.dataset.sort;

        if (elementDataset === "ascending") {
            setElements([...elements]
                .sort((a, b) => (a[parentValue] > b[parentValue] ? 1 : -1)));
        } else {
            setElements([...elements]
                .sort((a, b) => (a[parentValue] < b[parentValue] ? 1 : -1)));
        }
    }

    return (
        <UtilContext.Provider value={{
            requestPut, requestGet, requestPost, requestPostSearch, requestDelete, sorter,
            elements, fieldNamesToIgnore, dropdownFields
        }}>
            {props.children}
        </UtilContext.Provider>
    )
}

export default UtilContextProvider;
