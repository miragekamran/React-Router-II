import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ItemShipping from '../components/ItemShippping';
import ItemDescription from '../components/ItemDescription';


export default function Item(props) {
    // console.log(props)
    // console.log(props.match.params.itemId)
    const item = props.items.find((product) => {
        return `${product.id}` === props.match.params.itemId;
    });
    return (
        <div className='item-wrapper'>
            <div className='item-header'>
                <div className='image-wrapper'>
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                    />
                </div>
                <div className="item-title-wrapper">
                    <h2>{item.name}</h2>
                    <h4>${item.price}</h4>
                </div>
            </div>
            <nav className='item-sub-nav'>
                <NavLink to={`/shop/${item.id}/description`}>Description</NavLink>
                <NavLink to={`/shop/${item.id}/shipping`}>Shipping</NavLink>
            </nav>
            <Route 
              path='/shop/:itemId/description'
              render={props => { 
                  return <ItemDescription item={item} /> 
                }} 
            />
            <Route 
              path='/shop/:itemId/shipping'
              render={props => {
                  return <ItemShipping item={item} />
                }}
            />
        </div>
    )
}
