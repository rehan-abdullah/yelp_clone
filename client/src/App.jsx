import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import RestaurantUpdatePage from './routes/RestaurantUpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={RestaurantUpdatePage} />
          <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
        </Switch>
      </Router>
    </div>
  )
};

export default App;