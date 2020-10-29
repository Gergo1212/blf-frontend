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
           return  propertyNamesArray.map((property, index) => {
                return <th key={index}>{property}</th>
            });
        }
    }

    function listElementsFromContext(keyPrefix, contextElements, propertyNamesArray) {
        if (contextElements.length !== 0) {

            return contextElements.map((element, index) => {
                return <tr key={keyPrefix + index}>
                    {propertyNamesArray.map((propertyName, secondIndex) => {
                        return <td key={keyPrefix + "row" + secondIndex}>{element[propertyName]}</td>
                    })}
                </tr>
            })
        }
    }

    const tableStyle = {
        color: "white",
    }

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                <tr>
                    {createTableColumnNames(getPropertyNames(props.inputObjects))}
                </tr>
                </thead>
                <tbody>
                    {listElementsFromContext(props.prefix, props.inputObjects, getPropertyNames(props.inputObjects))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCreator;
