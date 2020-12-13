import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Context
import {RestaurantsContextProvider} from './context/RestaurantsContext';
// Components
import Home from './routes/Home';
import RestaurantUpdatePage from './routes/RestaurantUpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
// Styles
import './App.css';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants/:id/update" component={RestaurantUpdatePage} />
            <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  )
};

export default App;