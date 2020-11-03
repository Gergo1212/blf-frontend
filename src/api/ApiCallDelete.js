import {useEffect} from "react";
import axios from "axios";

const useDeleteElement =(url) =>{

    useEffect(() =>{

        axios.delete(url)
            .then((response) => console.log(response))
    })
}

export default useDeleteElement;