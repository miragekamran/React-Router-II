import React from 'react';
import items from '../data';
import { Link } from 'react-router-dom';

export default function ItemsList(props) {
    return (
        <div className='items-list-wrapper'>
            {props.items.map(item => {
                return (
                    <div className='items-card' key={item.id}>
                        <img
                            className='item-list-image'
                            src={item.imageUrl}
                            alt={item.name}
                        />
                        <Link to={`/shop/${item.id}`}>
                            <p>${item.price}</p>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
