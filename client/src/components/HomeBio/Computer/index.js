import React from "react";

export default (props) => {

    const {paragraph1, paragraph2, paragraph3 } = props.text;
    const { container, font } = props.bio;

    return (
        <div>
            <div style={container}>
                <p style={font}>{paragraph1}</p>
            </div>
            <div style={container}>
                <p style={font}>{paragraph2}</p>
            </div>
            <div style={container}>
                <p style={font}>{paragraph3}</p>
            </div>
        </div>
    );
};