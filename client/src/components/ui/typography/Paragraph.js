import React from "react";

function Paragraph(props){
    return(
        <p {...props}>{props.children}</p>
    )
}

export default Paragraph