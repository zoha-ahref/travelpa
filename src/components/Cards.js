import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
          <h1> Here are the Most Stunning Places to Visit in Pennsylvania</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem 
                    src='images/delaware.jpeg'
                    text='Delaware Water Gap'
                    label='Adventure'
                    path='/services'

                    />

                    <CardItem 
                      src='images/bushkill.jpeg'
                      text='Bushkill Falls, Pocono Mountains'
                      label='Relaxation'
                      path='/services'

                    /> 
             
                </ul>
              
                <ul className="cards__items">
                    <CardItem 
                      src='images/cherry.jpeg'
                      text='Cherry Springs State Park, Coudersport'
                      label='Scenic'
                      path='/services'

                      />

                    <CardItem 
                      src='images/rickett.jpeg'
                      text='Ricketts Glen State Park, Benton'
                      label='Relaxation'
                      path='/services'

                    /> 

                    <CardItem 
                      src='images/erie.jpeg'
                      text='Presque Isle State Park, Erie'
                      label='Outdoors'
                      path='/services'

                    /> 
              
                </ul>
            </div>
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem 
                  src='images/ohiopyle.jpeg'
                  text='Ohiopyle State Park'
                  label='Luxury'
                  path='/services'

                   />

                  <CardItem 
                    src='images/kinzua.jpeg'
                    text='Kinzua Bridge State Park, Mt Jewett'
                    label='Adventure'
                    path='/services'

                   /> 
             
              </ul>
              <ul className="cards__items">
                  <CardItem 
                    src='images/lehigh.jpeg'
                    text='Lehigh Gorge State Park, Weatherly'
                    label='Relaxation'
                    path='/services'

                    />

                    <CardItem 
                      src='images/forkville.jpeg'
                      text='Worlds End State Park, Forksville'
                      label='Adventure'
                      path='/services'

                    /> 

                    <CardItem 
                      src='images/alleghany.jpeg'
                      text='Allegheny National Forest, Marienville'
                      label='Adventure'
                      path='/services'

                    /> 
             
              </ul>
            </div>
          </div>
            
        </div>
    );
}

export default Cards;
