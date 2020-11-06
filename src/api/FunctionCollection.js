import axios from "axios";
import {useEffect, useState} from "react";

export function CreateRequest(url, method, data) {

    const [elements, setElements] = useState([]);

    useEffect(() => {

        switch (method) {

            case "GET":
                axios
                    .get(url)
                    .then((response) => setElements(response.data))
                    .catch((error) => console.log(error))
                break;

            case "POST":
                axios
                    .post(url, data)
                    .catch((error) => console.log(error));
                break;

            case "PUT":
                axios
                    .put(url, data)
                    .catch((error) => console.log(error))
                break;

            case "DELETE":
                axios
                    .delete(url)
                    .catch((error) => console.log(error))
                break;

            default:
                return "Axios doesn't work!";
        }
    }, [url, method, data])

    return elements;
}
