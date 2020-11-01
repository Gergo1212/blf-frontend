import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useParams} from "react-router"

function ElementView() {

    const {service, id} = useParams();

    const [element, setElement] = useState({});

    let urlForElement;

    if (service === "player") {
        urlForElement = `http://localhost:8762/player/${service}`;
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`
    }

    useEffect(() => {
        axios.get(urlForElement)
            .then((response) =>
                setElement(response.data))
            .catch((error) => console.log(error))
    }, [urlForElement]);

   /* const elementCreator = Object.keys(element).map((e) =>(
        <li>{e}</li>
    ));*/

    return (

        <div className={"renderDiv"}>
            <li>{element.date}</li>
        </div>
    )

}

export default ElementView;