import React from 'react'
import './card.styles.css'


export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>

        <h3> {props.monster.name} </h3>
        {/* card list e card component er modde monster props e je data gulo deya hoyese sekan teke name tah niyee h2 tag e deya hoyeche! */}
        <p> {props.monster.email} </p>

    </div>
)