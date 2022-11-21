import React, {useState, useEffect} from 'react';
import './NewsTicker.css'
export const NewsTicker = () => {

    return (
        <div className='news'>
            <ul className='scroll1'>
                <li className='lab'>Latest news:</li>
                <li>Start of the CS club</li>
                <li>Meeting every monday at 6:00pm</li>
                <li>Happy Thanksgiving</li>
                <li>Next Meeting: cryptography and blockchain</li>
            </ul>
        </div>
    )
}