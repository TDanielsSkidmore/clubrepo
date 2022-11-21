import React, {useState, useEffect} from 'react';
import './temp_page.css'
import folder from "../../folder.svg"
import {MeetingTimes} from './pages/meetingTimePageComponent.js'
import { BoardMembers } from './pages/boardMembersComponent';
import { Mission } from './pages/missionComponent';
import { Resources } from './pages/resourcesComponent';
export const TempPage = () => {

    const [show, setShow] = useState("no show");

    const changeShow = (str) => {
        setShow(str);
    };

    return (
       <div className='computer2' style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrm0UliwQMCywi8OJmE5mpImYZnMY5iOxhQ&usqp=CAU)"}}>
            <div className='folder' onClick={() => setShow("mission")}>
                <img src={folder} alt='home' className='folderSVG'></img>
                <p>Our Mission</p>
            </div>
            <div className='folder' onClick={() => setShow("times")}>
                <img src={folder} alt='home' className='folderSVG'></img>
                <p>Meeting Times</p>
            </div>
            <div className='folder' onClick={() => setShow("members")}>
                <img src={folder} alt='home' className='folderSVG'></img>
                <p>Board Members</p>
            </div>
            <div className='folder' id='resources' onClick={() => setShow("resources")}>
                <img src={folder} alt='home' className='folderSVG'></img>
                <p>Resources</p>
            </div>
            <MeetingTimes show={show} changeShow={changeShow}/>
            <BoardMembers show={show} changeShow={changeShow}/>
            <Mission show={show} changeShow={changeShow}/>
            <Resources show={show} changeShow={changeShow}/>
       </div>
    )
}