import React, { useEffect, useState } from 'react';
import Card from '../components/cards.jsx';
import characters from '../components/characters.js';
import '../styles/gamepage.css'

export default function GamePage() {
    const [array, setArray] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [mode, setMode] = useState('Hard');
    let cardSize;
    let bestOf;
    let multiply;
    let winScreenBool = false;

    if(mode === 'Easy'){
        bestOf = '5';
        cardSize = 3;
        if(window.innerWidth > 650){
            multiply = '120px';
        }else {
            multiply = '70px';
        }
    } else if(mode === 'Medium'){
        cardSize = 4;
        bestOf = '8';
        if(window.innerWidth > 650){
            multiply = '75px';
        }else {
            multiply = '43px';
        }
    }else if(mode === 'Hard'){
        cardSize = 5;
        bestOf = '10';
        if(window.innerWidth > 650){
            multiply = '60px';
        }else {
            multiply = '35px';
        }
    }
    
    const getRandomCards = () => {
        const characterSet = new Set();
        while (characterSet.size < cardSize) {
            const randomNumber = Math.floor(Math.random() * characters.length);
            characterSet.add(characters[randomNumber]);
        }
        return Array.from(characterSet);
    };

    useEffect(() => {
        const startInterval = setInterval(() => {
            const cards = document.querySelectorAll('.card-inner');
            cards.forEach(card => card.classList.add('animate'));
            clearInterval(startInterval);
        }, 600);
    }, [array, mode]);

    useEffect(() => {
        const newCharacters = getRandomCards();
        setArray(newCharacters);
    }, [mode]);

    const changeCards = () => {
        let intervalId;
        const allCards = document.querySelectorAll('.card-inner');
        allCards.forEach(card => card.classList.remove('animate'));
        intervalId = setInterval(() => {
            const newCharacters = getRandomCards();
            setArray(newCharacters);
            clearInterval(intervalId);
        }, 700);
    };

    const addToScore = () => setScore(score + 1);

    const gameOver = () => {
        characters.forEach((char) => char.clicked = false);
        setScore(0);
        characters.forEach((char) => char.clicked = false);
    };

    if(score === 0){
        characters.forEach((char) => char.clicked = false);
    }

    if(score > bestScore){
        setBestScore(score);
    }

    if(score === 5 && mode === 'Easy'){
        winScreenBool = true;
    } 

    if(score === 8 && mode === 'Medium'){
        winScreenBool = true;
    }

    if(score === 10 && mode === 'Hard'){
        winScreenBool = true;
    }

    return (
        <>
            <div className='container'>
                <div className='modeContainer'>
                    <button className="btn" id="easyBtn" onClick={() => {setMode('Easy'); setScore(0); setBestScore(0)}}>Easy</button>
                    <button className="btn" id="mediumBtn" onClick={() => {setMode('Medium'); setScore(0); setBestScore(0)}}>Medium</button>
                    <button className="btn" id="hardBtn" onClick={() => {setMode('Hard'); setScore(0); setBestScore(0)}}>Hard</button>
                </div>
                <div className='scoreContainer'>
                    <div className='score'>Score: {score}</div>
                    <div className='bestScore'>Best Score: {bestScore}/{bestOf}</div>
                </div>
                <div className='bar'>
                    <div className='fillBar' style={{width: `calc(${multiply} * ${score})`}}></div>
                </div>
                <div className='cardContainer'>
                    {array.map((char) => (
                        <Card 
                        key={char.id} 
                        id={char.id} 
                        name={char.name} 
                        src={char.image} 
                        changeCards={changeCards} 
                        gameOver={gameOver}
                        addToScore={addToScore}  
                        />
                    ))}
                </div>
            </div>
            <div className={winScreenBool === true ? 'winScreen' : ''} style={winScreenBool === false ? {display: 'none'} : {display: 'flex'}}>
                <h2>Congratulations!</h2>
                <p className='winP'>You just won 'The Very Cool Memory Game About Coding Languages!' in {mode} difficulty, if you want to play again click the button!</p>
                <button className='btn' onClick={() => window.location.reload()}>Play Again!</button>
            </div>
        </>
    );
}