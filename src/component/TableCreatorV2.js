import React, {useContext} from "react";
import {RequestContext} from "../context/RequestContext";

//Mui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { element } from "prop-types";


const useStyles = makeStyles({
  root: {
    width: '96%',
    marginLeft:'2%'
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableCreatorV2(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const {sorter} = useContext(RequestContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

function getPropertyNames(objectArray) {
    if (objectArray.length !== 0) {
        return Object.keys(objectArray[0]);
    } else {
        return [];
    }
}

function createTableColumnNames(propertyNamesArray) {
    return(
    <TableRow>
        {propertyNamesArray.length !== 0? (propertyNamesArray.map((property, index) => (
        <TableCell
            key={property + index}
            align="center"
        >
            {property}
                    <i onClick={(event)=>sorter(event)} data-sort="ascending" className="fas fa-sort-up"/>
                    <i onClick={(event)=>sorter(event)} data-sort="descending" className="fas fa-sort-down"/>
        </TableCell>
        ))):("Missing data")}
    </TableRow>
    )
}

function createTableFromElements(keyPrefix, elementsArray, propertyNamesArray) {
    if (elementsArray.length > 0) {
        return elementsArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element, index) => {
            return (
              <TableRow role="checkbox" tabIndex={-1} key={keyPrefix + index}>
                {propertyNamesArray.map((propertyName, secondIndex) => (
                    <TableCell key={propertyName + secondIndex} align="center"  onClick={() => window.location.href =
                        window.location.pathname + `/${element.id}`}>
                        <div className="tableDiv">
                            {typeof element[propertyName] === "object" && element[propertyName] !== null ?
                                    element[propertyName].name : element[propertyName]}
                        </div>
                    </TableCell>
                ))}
              </TableRow>
            );
        })
    }
   
}

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
           {createTableColumnNames(getPropertyNames(props.inputObjects))}
          </TableHead>
          <TableBody>
           {createTableFromElements(props.prefix, props.inputObjects, getPropertyNames(props.inputObjects))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 30, 100]}
        component="div"
        count={props.inputObjects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}