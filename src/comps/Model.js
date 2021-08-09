import React from "react";

const Model = (props) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            props.setSelectedImg(null);
        }
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={props.selectedImg} alt="enlarged pic"/>
        </div>
    )
}
export default Model;