import React from "react";
import {useParams} from "react-router"
import useFetchAllData from "../../api/ApiCallFetch";

function ElementAdmin() {

    const {service, id} = useParams();

    let urlForElement;

    if (service === "player") {
        urlForElement = `http://localhost:8762/people/${service}/${id}`;
        //TODO környezeti vagy egy változóba
    } else {
        urlForElement = `http://localhost:8762/game/${service}/${id}`;
    }

    const element = useFetchAllData(urlForElement);

    const getNames = Object.keys(element);

    const createList =
        getNames.map((name) => (
            <li>{name} : {element[name]}</li>
        ))

    return (

        <div className={"renderDiv"}>
            {createList}
        </div>
    )

}

export default ElementAdmin;