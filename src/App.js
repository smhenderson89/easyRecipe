import React from 'react';
import './App.css';
import SearchRecipe from './Components/SearchRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
// API Location: https://developer.edamam.com/edamam-docs-recipe-api

const App = () => {

  const APP_ID = "0f25f43a";
  const APP_KEY = "4638dc3291ceb38bd729a2d8d0bb4fbd";
  const exampleAPI = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0f25f43a&app_key=4638dc3291ceb38bd729a2d8d0bb4fbd";

  return (
    <div className = "App">
      <h1>Recipe App</h1>
      <SearchRecipe />
    </div>
  )
}
export default App;
