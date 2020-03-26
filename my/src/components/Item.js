import React from 'react';


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
                    <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="item-title-wrapper">
                    <h2>{item.name}</h2>
                    <h4>${item.price}</h4>
                </div>
            </div>
            <div>
                <p className="item-description">{item.description}</p>
            </div>
        </div>
    )
}
