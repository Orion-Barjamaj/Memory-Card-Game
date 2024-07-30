import React, { useEffect, useState } from 'react';
import characters from '../components/characters.js';
import '../styles/card.css';
import Tilt from 'react-parallax-tilt';

function Card({ id, name, src, changeCards, addToScore, gameOver}) {
    const setClickedToCharacters = () => {
        characters.filter((chars) => chars.id === id ? chars.clicked = true : chars.clicked = chars.clicked);
    }

    const addScore = () => {
        const rightChar = characters.find((char) => char.id === id);
        console.log(rightChar.name, rightChar.clicked);
        if(rightChar.clicked === true){
            characters.forEach((char) => char.clicked = false);
            gameOver();
        }else{
            addToScore();
        }
    }

    return (
        <Tilt>
            <div key={id} className="card">
                <div className='card-inner'>
                    <div className='frontCard' onClick={() => {changeCards(), addScore(), setClickedToCharacters()}}>
                        <img alt={name} src={src} className="cardImg" />
                        <div className="standName">{name}</div>
                    </div>
                    <div className='backCard'></div>
                </div>
            </div>
        </Tilt>
    );
}

export default Card;