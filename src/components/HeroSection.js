import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <img src="/images/background.jpg" alt="background"/>  
            {/* <img src="/images/alaska.jpg"></img> */}
            <h1>WELCOME TO PENNSYLVANIA</h1>
            <p>Explore The Most Scenic Destinations</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>

                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
                 

            </div>

        </div>
    )
}

export default HeroSection