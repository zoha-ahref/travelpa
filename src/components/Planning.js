import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Planning() {
    return (
        <div className="cards">
        <h1> Here are the Most Stunning Places to Visit in Pennsylvania</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
             <ul className="cards__items">
                <CardItem 
                  src='images/hotels.jpeg'
                  text='Hotels & Motels'
                  label='Hotels'
                  path='/services'

                   />

                  <CardItem 
                    src='images/airbnb.jpeg'
                    text='Bed and Breakfast'
                    label='bnb'
                    path='/services'

                   /> 
             
             </ul>
             <ul className="cards__items">
                <CardItem 
                  src='images/resorts.jpeg'
                  text='Luxurious Resorts'
                  label='Resorts'
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
          </div>
            
        </div>
    );
}

export default Planning;

// function Planning () {
//     return (
//         <div className="cards">
//         <h1> Rest easy in our accomodations where you will never grow tired of Pensylvania hospitality </h1>
//         <div className="cards__container">
//             <div className="cards__wrapper">
//              <ul className="cards__items">
//                 <CardItem 
//                   src='images/hotels.jpeg'
//                   text='Hotels & Motels'
//                   label='Hotels'
//                   path='/services'

//                    />

//                   <CardItem 
//                     src='images/airbnb.jpeg'
//                     text='Bed and Breakfast'
//                     label='bnb'
//                     path='/services'

//                    /> 
             
//              </ul>
//              <ul className="cards__items">
//                 <CardItem 
//                   src='images/resorts.jpeg'
//                   text='Luxurious Resorts'
//                   label='Resorts'
//                   path='/services'

//                    />

//                   <CardItem 
//                     src='images/campsite.jpeg'
//                     text='Campgrounds & RV Parks'
//                     label='Campground'
//                     path='/services'

//                    /> 

//                   <CardItem 
//                     src='images/vacation.jpeg'
//                     text='Vacation Rentals'
//                     label='Vacation'
//                     path='/services'

//                    /> 
             
//               </ul>
//               </div>
//               </div>
            
//         </div>
//     );
// }

//     export default Planning;