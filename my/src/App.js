import React from 'react';
// import data from './data';
import Home from './components/Home';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ItemsList from './components/ItemsList';
import Item from './components/Item';

function App() {
  // const [items, setItems] = useState(data)


  return (
    <div className="App">
      <nav>
        <h1 className='store-header'>Mirage's Trinkets</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={ItemsList} />
      <Route path='/shop/:id' component={Item} />
    </div>
  );
}

export default App;
