import React from 'react';
import { Card } from '../card/card.component.jsx';
import './card-list.styles.css';



export const CardList = props =>(
    <div className='card-list' >
        {/* App.js e  cardlist e props er maddome je data gulo deya hoyeche ta shobgulo ekta ekta kore show koranor jonno map kora hoyeche  */}
        {props.monsters.map( monster => (
            <Card key={monster.id} monster={monster}/>
            // mapping korar por shob data guloke monster props er maddome Card component e patano hoyeche!

         ))}      
    </div> 
    
)

