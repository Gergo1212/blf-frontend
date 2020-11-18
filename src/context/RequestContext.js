import React, {createContext, useState} from "react";
import axios from "axios";

export const RequestContext = createContext([]);

function RequestContextProvider(props) {

    const [elements, setElements] = useState([]);
    const [pages, setPages] = useState([]);


    const requestGet = (url) => {
        axios
            .get(url)
            .then((response) => setElements(response.data))
            .catch((error) => console.log(error))
    }

    const requestPut = (url, data) => {
        axios
            .put(url, data)
            .catch((error) => console.log(error))
    }

    const requestPostSearch = (url, data) => {
        axios
            .post(url, data)
            .then((response) => setElements(response.data))
            .catch((error) => console.log(error));
    }

    const requestPost = (url, data) => {
        axios
            .post(url, data)
            .catch((error) => console.log(error));
    }

    const requestDelete = (url) => {
        axios
            .delete(url)
            .catch((error) => console.log(error))
    }


    return (
        <RequestContext.Provider value={{
            requestPut, requestGet, requestPost, requestPostSearch, requestDelete, elements, pages
        }}>
            {props.children}
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;
