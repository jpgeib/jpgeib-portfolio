import React from "react";

import "./style.css";

const HomeBio = (props) => {

    const {paragraph1, paragraph2, paragraph3 } = props.bio;
    return (
        <div id="paragraphs">
            <div id="content1">
                <p>{paragraph1}</p>
            </div>
            <div id="content2">
                <p>{paragraph2}</p>
            </div>
            <div id="content3">
                <p>{paragraph3}</p>
            </div>
        </div>
    );
};

export default HomeBio;