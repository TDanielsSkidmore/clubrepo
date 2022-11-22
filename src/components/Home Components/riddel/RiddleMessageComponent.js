import React from 'react';
import './RiddleMessageComponent.css'
import x from '../../../x.svg'
export const Riddle = (props) => {
    if (props.show ==="riddle"){
        return (
            <div className='page'>
                <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
                <h1>Welcome to the current Riddle</h1>
                <p> Solve the Riddle and be the first to say the answer in the Discord and win a Prize!!!</p>
                <button onClick={()=> props.changeShow("riddleMessage")}>Continue</button>
            </div>
        )
    }
    else if (props.show === "riddleMessage"){
        return (
            <div className='page'>
                <img src={x} alt='home' className='xSVG' onClick={() => props.changeShow("no show")}></img>
                <h1>The Riddle</h1>
                <h3>Mountains without rocks</h3>
                <h3>Trees without leaves</h3>
                <h3>Buildings without bricks</h3>
                <h3>Water but no fish</h3>
                <h3>What am I?</h3>
            </div>
        )
    }
 }