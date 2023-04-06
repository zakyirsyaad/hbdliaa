import { NavLink } from "react-router-dom";
import videoBg from '../assets/en.mp4'
import React from 'react';

function Welcome() {
    return (
        <div className="welcome_container">
            <video src={videoBg} autoPlay controls className="videowelcome" />
            <div className="question">
                <p className="desc_welcome">Heyy, liaa sayang ada sesuatu nih buat kamu</p>
                <p className="desc_welcome">Nikmatin Videonya dulu gapapaa sayangg, kalo penasaran klik tombol ajaa hehehe</p>
                <NavLink to='/loveyou'>
                    <button>Click Here</button>
                </NavLink >
            </div>
            <p className="text_welcome">Available view on Laptop/PC</p>
        </div >
    );
}

export default Welcome;
