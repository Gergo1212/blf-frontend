import React, {useContext, useEffect} from "react";
import TableCreator from "../../component/TableCreator";
import {UtilContext} from "../../context/UtilContext";
import AdminNavbar from "../../component/AdminNavbar";

function SeasonAdmin() {

    const {elements, requestGet, requestPost} = useContext(UtilContext);

    useEffect(() => {
        requestGet("http://localhost:8091/season")
    }, [])


    return (
        <React.Fragment>
            <AdminNavbar/>
            <button className={"inputSubmitButton"}
                    onClick={() => requestPost("http://localhost:8091/season")}>Hozzáadás
            </button>
            <TableCreator inputObjects={elements} prefix="currentElement"/>
        </React.Fragment>
    )
}

export default SeasonAdmin;