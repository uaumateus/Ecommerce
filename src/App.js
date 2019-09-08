import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Bag from './pages/Bag';
import Account from './pages/Account';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sacola" exact component={Bag}/>
        <Route path="/conta" exact component={Account}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
