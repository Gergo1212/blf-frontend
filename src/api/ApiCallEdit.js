import {useEffect} from "react";
import axios from "axios";

const useUpdateElement = (url, updatedElement) => {

    useEffect(() => {

        axios
            .put(url, updatedElement)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    })
}

export default useUpdateElement;
