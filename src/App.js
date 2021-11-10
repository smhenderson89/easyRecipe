import React from 'react';
import './App.css';
import SearchRecipe from './Components/SearchRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
// API Location: https://developer.edamam.com/edamam-docs-recipe-api
import NavBar from './Components/NavBar';
import DetailedRecipe from './Components/DetailedRecipe';
import Favorites from './Components/Favorites';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className = "App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" exact element = {<SearchRecipe />} />
          <Route path = "/Favorites" element = {<Favorites />} />
          <Route path = "/Detailed" exact element = {<DetailedRecipe />} />
        </Routes>
      </BrowserRouter>        
    </div>
  )
}
export default App;
