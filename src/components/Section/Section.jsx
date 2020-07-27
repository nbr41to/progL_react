import React from 'react';
import eyecatch from "./catch.jpg";

function Section(props) {
    // const img_src = require(props.img_src);
    return (
        <React.Fragment>
            <section>
                <div className="text_box">
                    <h2>{props.ttl}</h2>
                    <p>{props.text}</p>
                </div>
                <img src={props.img_src} alt="catch" />
            </section>
        </React.Fragment>
    );
}

export default Section;