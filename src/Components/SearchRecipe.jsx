import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import {Col, Row} from 'react-bootstrap'

function SearchRecipe() {
    // State trackers
    const [recipeList, setRecipeList] = useState([]);
    const [inputValue, setInputValue] = useState(""); //initializing state to store user input value

    const getRecipe = (event) => {
        console.log('API called');
        event.preventDefault()
        // Making API Axios call to Recipe app
        const APP_ID = "0f25f43a";
        const APP_KEY = "4638dc3291ceb38bd729a2d8d0bb4fbd";
        // const exampleAPI = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=0f25f43a&app_key=4638dc3291ceb38bd729a2d8d0bb4fbd";

        // working API: https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}
        // TODO: Implement adding extra search options and add options accordingly
        // TODO: Show existing API call when go back to main page after going to other pages
        // TODO:    Save call on seperate call on Redux
        // Run API with default search to display information
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${inputValue}&calories=500-1000&imageSize=SMALL&time=10-60`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                  },
            })
            .then((res) => res.data)
            .then((data) => {
                if (data.count === 0) { // If no results for the search
                    setRecipeList()
                } else {
                    return setRecipeList(data.hits)
                }
            });
    }
    
    // function created to set the state of inputValue to the value of the input
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    
    // Return Cards of recipes
    return (
        <div>
            <h3>Recipe Search testing</h3>
            <form onSubmit = {getRecipe}>
                <input value = {inputValue} onChange = {handleChange} type = "text" />
                <button type = "submit">Search Recipe</button>
            </form>
            <h4>Results: </h4>
            <div className="recipe-container">
                <Row>
                {recipeList && recipeList.map((recipe, index) => {
                    return (
                        <Col key = {index} xs={12} sm={6} md={6} lg={4} xl={3}                        className = "mb-6">
                        <RecipeCard index = {index} recipe = {recipe.recipe} />
                        </Col>
                        )
                })}
                </Row>
            </div>
        </div>

    )
}

export default SearchRecipe
