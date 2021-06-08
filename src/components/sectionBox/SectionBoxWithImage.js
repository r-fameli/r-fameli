import React from 'react';
import '../../css/SectionBoxWithImage.css';

function SectionBoxWithImage(props) {
    return (
        <div className="SectionBoxWithImage" style={props.boxStyle}>
            <span className="SectionBoxWithImage-image-container">
                <img className="SectionBoxWithImage-image" src={props.image} />
            </span>
            <span className="SectionBoxWithImage-text" style={props.textBoxStyle} >
                <h1>{props.title}</h1>
                {props.description}
            </span>
        </div>
    )
}

export default SectionBoxWithImage;