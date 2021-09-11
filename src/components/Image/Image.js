import React from "react";
import './css/style.css';

const Image = ({image}) => {
    return (
        <img src={image.url}/>
    );

}


export default Image;