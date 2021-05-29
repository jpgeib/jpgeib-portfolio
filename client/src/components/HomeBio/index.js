import React from "react";

const HomeBio = (props) => {

    const {paragraph1, paragraph2, paragraph3 } = props.text;
    const { bio, general } = props;

    return (
        <div id="paragraphs">
            <div style={bio}>
                <p style={general}>{paragraph1}</p>
            </div>
            <div style={bio}>
                <p style={general}>{paragraph2}</p>
            </div>
            <div style={bio}>
                <p style={general}>{paragraph3}</p>
            </div>
        </div>
    );
};

export default HomeBio;