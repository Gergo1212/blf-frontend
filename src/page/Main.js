import React from "react";
import DocViewer from "react-doc-viewer";


function Main() {

 /*   const document = [
        {uri: require("/bemutatkozas.docx")}, // Local File
    ];*/

    return (
        <div>
            <iframe
                src='https://view.officeapps.live.com/op/view.aspx?src=http://localhost:3000/bemutatkozas.docx'
                width='100%' height='100%' frameBorder='1'>
            </iframe>
            MAIN PAGE
        </div>
    )
}

export default Main;