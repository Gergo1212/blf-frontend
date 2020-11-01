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
                <th key={index}>{property}</th>
            ));
        }
    }

    function listElementsFromContext(keyPrefix, contextElements, propertyNamesArray) {
        if (contextElements.length !== 0) {
            return contextElements.map((element, index) => (
                <tr key={keyPrefix + index} className="rowsToHover">
                    {propertyNamesArray.map((propertyName, secondIndex) => (
                        <td key={keyPrefix + secondIndex}
                            onClick={event => window.location.href =
                                window.location.pathname + `/${element.id}`}
                        >{element[propertyName]}</td>
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
            {listElementsFromContext(props.preFix, props.inputObjects, getPropertyNames(props.inputObjects))}
            </tbody>
        </table>
    )
}

export default TableCreator;