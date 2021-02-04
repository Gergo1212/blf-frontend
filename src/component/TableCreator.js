import React, {useContext} from "react";
import {UtilContext} from "../context/UtilContext";

function TableCreator(props) {

    const {sorter} = useContext(UtilContext);


    function getPropertyNames(objectArray) {
        let length = objectArray.length;
        return length > 0 ? Object.keys(objectArray[0]) : [];
    }

    function createTableColumnNames(propertyNamesArray) {
        if (propertyNamesArray.length > 0) {
            return propertyNamesArray.map((name, index) => (
                <th key={name + index}>{name}
                    <i onClick={(event) => sorter(event)} data-sort="ascending" className="fas fa-sort-up"/>
                    <i onClick={(event) => sorter(event)} data-sort="descending" className="fas fa-sort-down"/>
                </th>
            ));
        }
    }

    function createTableFromElements(keyPrefix, elementsArray, propertyNamesArray) {

        if (elementsArray.length > 0) {

            return elementsArray.map((element, index) => (
                <tr key={keyPrefix + index} className="rowsToHover">

                    {propertyNamesArray.map((propertyName, secondIndex) => (
                        <td key={propertyName + secondIndex}
                            onClick={() => window.location.href = window.location.pathname + `/${element.id}`}>
                            <div className="tableDiv">

                                {typeof element[propertyName] === "object" && element[propertyName] !== null ?
                                    element[propertyName].name : element[propertyName]}
                            </div>
                        </td>
                    ))}

                </tr>
            ))
        }
    }

    return (
        <table>
            <thead>
            <tr>
                {createTableColumnNames(getPropertyNames(props.inputObjects))}
            </tr>
            </thead>
            <tbody>
            {createTableFromElements(props.prefix, props.inputObjects, getPropertyNames(props.inputObjects))}
            </tbody>
        </table>
    )
}

export default TableCreator;
