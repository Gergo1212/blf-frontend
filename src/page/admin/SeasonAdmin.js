import React, {useContext} from "react";
import {SeasonContext} from "../../context/SeasonContext";
import TableCreator from "../../component/TableCreator";
import AdminNavbar from "../../component/AdminNavbar";

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
        <React.Fragment>
            <AdminNavbar/>
            <TableCreator inputObjects={seasons} prefix="season"/>
        </React.Fragment>
    )
}

export default SeasonAdmin;
