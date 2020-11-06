import React from "react";

function TableCreator(props) {

    function getPropertyNames(objectArray) {
        if (objectArray.length !== 0) {
            return Object.keys(objectArray[0]);
        } else {
            return [];
        }
    }

    function createTableColumnNames(propertyNamesArray) {
        if (propertyNamesArray.length !== 0) {
            return propertyNamesArray.map((property, index) => (
                <th key={property + index}>{property}</th>
            ));
        }
    }

    function listElementsFromContext(keyPrefix, contextElements, propertyNamesArray) {
        if (contextElements.length !== 0) {
            return contextElements.map((element, index) => (
                <tr key={keyPrefix + index} className="rowsToHover">
                    {propertyNamesArray.map((propertyName, secondIndex) => (
                        <td key={propertyName + secondIndex}
                            onClick={() => window.location.href =
                                window.location.pathname + `/${element.id}`}>
                            <div className="tableDiv">{element[propertyName]}</div>
                        </td>
                    ))}
                    <td>
                        <i className={"far fa-trash-alt"}/>
                    </td>
                </tr>
            ))
        }
    }

    /*
    >{typeof element[propertyName] === "object" ? element[propertyName].id: element[propertyName]}</td>
*/

    return (
        <table>
            <thead>
            <tr>
                {createTableColumnNames(getPropertyNames(props.inputObjects))}
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {listElementsFromContext(props.preFix, props.inputObjects, getPropertyNames(props.inputObjects))}
            </tbody>
        </table>
    )
}

export default TableCreator;
