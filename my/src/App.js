import React, { useState } from 'react';
import data from './data';
import Home from './components/Home';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ItemsList from './components/ItemsList';
import Item from './components/Item';

function App() {
  // pretnd this is an API call.
  const [itemsState, setItemsState] = useState(data)
  // console.log(items)


  return (
    <div className="App">
      <nav>
        <h1 className='store-header'>Mirage's Trinkets</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </div>
      </nav>
      <Route 
        exact
        path='/'
        component={Home}
      />
      <Route
        exact 
        path='/shop'
        render={(props) => { 
          return <ItemsList items={itemsState} /> 
        }} 
      />
      <Route 
        path='/shop/:itemId' 
        render={(props) => { 
          return (
            <Item 
              items={itemsState}
              // match={props.match}
              // history={props.history}
              // location={props.location}
              {...props}
            />
          ) 
        }} 
      />
    </div>
  );
}

export default App;
