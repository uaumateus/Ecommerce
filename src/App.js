import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
