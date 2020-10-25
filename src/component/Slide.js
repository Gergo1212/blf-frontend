import React from "react";

function Slide() {

    const slideStyle = {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        color: "white",
        width: "100%",
        justifyContent: "space-evenly",
    }

    const cardStyle = {
        border: "solid rgba(240, 240, 240, .20)",
    }

    return (
        <div style={slideStyle}>
            <table style={cardStyle}>
                <thead>
                <tr style={cardStyle}>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Team 1</td>
                    <td>Points</td>
                </tr>
                <tr>
                    <td>Team 2</td>
                    <td>Points</td>
                </tr>
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Team 1</td>
                    <td>Points</td>
                </tr>
                <tr>
                    <td>Team 2</td>
                    <td>Points</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Slide;