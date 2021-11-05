import React from 'react';
import './App.css';
import SearchRecipe from './Components/SearchRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
// API Location: https://developer.edamam.com/edamam-docs-recipe-api
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar';
import DetailedRecipe from './Components/DetailedRecipe';
import Favorites from './Components/Favorites';
import { Route, Switch } from 'react-router';

const App = () => {

  /* const APP_ID = "0f25f43a";
  const APP_KEY = "4638dc3291ceb38bd729a2d8d0bb4fbd";
  const exampleAPI = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0f25f43a&app_key=4638dc3291ceb38bd729a2d8d0bb4fbd"; */
  // TODO: Fixed 'Switch" not exported from 'react-router'?

  return (
    <div className = "App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = '/'>
            <SearchRecipe />
          </Route>
          <Route path = "/Detailed">
            <DetailedRecipe />
          </Route>
          <Route path = "/Favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
