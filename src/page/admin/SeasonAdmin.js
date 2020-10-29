import React, {useContext} from "react";
import {SeasonContext} from "../../context/SeasonContext";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";
import "../../style/Leagueadmin.css"


function SeasonAdmin() {

    const {seasons} = useContext(SeasonContext);

    /*  const seasonToSend = {
          date: "123456-78910"
      }
      const addSeason = () => {
          axios.post("http://localhost:8762/game/season/add", seasonToSend)
              .then(response => console.log(response))
              .catch((error) => console.log(error))
      };*/


    return (
        <div className={"leagueAdminDiv"}>
            <AdminNavbar/>
            <TableCreator inputObjects={seasons} prefix="season"/>
        </div>
    )
}

export default SeasonAdmin;
