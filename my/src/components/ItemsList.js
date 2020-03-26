import React from 'react';
import items from '../data';
import { Link } from 'react-router-dom';

export default function ItemsList() {
    return (
        <div className='items-list-wrapper'>
            {items.map(item => {
                return (
                    <Link to={`/shop/${item.id}`}>
                       <div className='items-card' key={item.id}>
                        <img
                            className='item-list-image'
                            src={item.imageUrl}
                            alt={item.name}
                        />
                        <p>${item.price}</p>
                        <p>{item.name}</p>
                    </div> 
                    </Link>
                )
            })}
        </div>
    )
}
