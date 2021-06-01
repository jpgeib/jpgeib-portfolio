import React from "react";

const HomeBio = (props) => {

    const {paragraph1, paragraph2, paragraph3 } = props.text;
    const { container, text } = props.bio;

    return (
        <div id="paragraphs">
            <div style={container}>
                <p style={text}>{paragraph1}</p>
            </div>
            <div style={container}>
                <p style={text}>{paragraph2}</p>
            </div>
            <div style={container}>
                <p style={text}>{paragraph3}</p>
            </div>
        </div>
    );
};

export default HomeBio;