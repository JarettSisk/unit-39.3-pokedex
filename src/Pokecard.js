import React from "react";
import "./Pokecard.css"
const Pokecard = ({name, image, type}) => {
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-name">{name}</h1>
            <img className="Pokecard-image" src={image} alt={name}/>
            <p className="Pokecard-type">Type: {type}</p>
        </div>
    )
}

export default Pokecard;