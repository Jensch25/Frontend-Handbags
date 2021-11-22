import React from "react";

function Tile(props) {
    return (
    <section>
        <h2>{props.title}</h2>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <img src={props.img} alt={""}/>
    </section>
    );
}

export default Tile;