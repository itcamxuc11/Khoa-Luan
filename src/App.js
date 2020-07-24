import React from 'react';
import './App.css';
import Header from './components/header/header';
import Restaurant from './components/restaurant-page/restaurant';
import Footer from './components/footer/footer';
import Search from './components/search/search';

import './config/firebase';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/restaurants">
            <Restaurant />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Login />
          </Route>
          <Route path="/restaurant/register">
            <Register />
          </Route>
          <Route path="/restaurant/profile">
            <Restaurant />
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
