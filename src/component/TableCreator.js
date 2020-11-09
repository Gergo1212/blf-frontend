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

    function createTableFromElements(keyPrefix, elementsArray, propertyNamesArray) {
        if (elementsArray.length > 0) {
            return elementsArray.map((element, index) => (
                <tr key={keyPrefix + index} className="rowsToHover">
                    {propertyNamesArray.map((propertyName, secondIndex) => (
                        <td key={propertyName + secondIndex}
                            onClick={() => window.location.href =
                                window.location.pathname + `/${element.id}`}>
                            <div className="tableDiv">
                                {typeof element[propertyName] === "object" &&  element[propertyName] !== null ?
                                    element[propertyName].id : element[propertyName]}
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
