import React from "react";
import { homeText } from "../../text";

import "./style.css";

const HomeBio = () => {
    return (
        <div id="paragraphs">
            <div id="content1">
                <p>{homeText.paragraph1}</p>
            </div>
            <div id="content2">
                <p>{homeText.paragraph2}</p>
            </div>
            <div id="content3">
                <p>{homeText.paragraph3}</p>
            </div>
        </div>
    );
};

export default HomeBio;