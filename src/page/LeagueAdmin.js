import React, {useContext} from "react";
import {LeagueContext} from "../context/LeagueContext";
import TableCreator from "../component/TableCreator";

function LeagueAdmin() {

    const {leagues} = useContext(LeagueContext);

    return (
        <TableCreator inputObjects={leagues} preFix="league">

        </TableCreator>

    )
}

export default LeagueAdmin;
