import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Experiences () {
    return (
        <div className="cards">
        <h1> Rest easy in our accomodations where you will </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
             <ul className="cards__items">
                <CardItem 
                  src='images/delaware.jpeg'
                  text='Cuisine Of Pennsylvania'
                  
                  path='/services'

                   />

                  <CardItem 
                    src='images/bushkill.jpeg'
                    text='Shopping in Pennsylvania'
                    
                    path='/services'

                   /> 
             
             </ul>
             <ul className="cards__items">
                <CardItem 
                  src='images/cherry.jpeg'
                  text='Holidays & Festivals in Pennsylvania'
                  
                  path='/services'

                   />

                  <CardItem 
                    src='images/rickett.jpeg'
                    text='Pennsylvania Tours'
                    label='Relaxation'
                    path='/services'

                   /> 

                  <CardItem 
                    src='images/erie.jpeg'
                    text='Nature in Pennsylvania'
                    label='Outdoors'
                    path='/services'

                   /> 
             
              </ul>
              </div>
            </div>
            
        </div>
    )};

    export default Experiences;