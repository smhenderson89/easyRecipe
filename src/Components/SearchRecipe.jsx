import React, { useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import {Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function SearchRecipe() {
    // State trackers
    const [recipeList, setRecipeList] = useState([]);
    const [inputValue, setInputValue] = useState(""); 
    const [warning, setWarning] = useState(false);
    //initializing state to store user input value

    const getRecipe = (event) => {
        // console.log('API called');
        event.preventDefault()
        const APP_ID = "0f25f43a";
        const APP_KEY = "4638dc3291ceb38bd729a2d8d0bb4fbd";
        console.log(process.env.REACT_APP_ID_VAR)
        console.log('test');

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
                    // console.log('no recipe found');
                    setWarning(true)
                    // setRecipeList()
                } else {
                    setWarning(false)
                    return setRecipeList(data.hits)
                }
            });
    }    

    // function created to set the state of inputValue to the value of the input
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // UseEffect for Default API Call:
    const getDefaultRecipe = () => {
        // console.log('API called');
        // event.preventDefault()
        const APP_ID = "0f25f43a";
        const APP_KEY = "4638dc3291ceb38bd729a2d8d0bb4fbd";
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=pasta&calories=500-1000&imageSize=SMALL&time=10-60`,
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

    // Invoke API under a useEffect or OnSubmit to prevent a death loop
    useEffect(() => {
        getDefaultRecipe()
        // console.log('UseEffect Fired');
    }, [])

    // Return Cards of recipes
    if (warning) {
        return (
        <div>
            <div>
                <h3 className="title">Recipe Search</h3>
                <form className = "p-4" onSubmit = {getRecipe}>
                    <input className = "pr-2" value = {inputValue} onChange = {handleChange} type = "text" placeholder="Enter recipe here..." />
                    <Button className = "buttonSearch" variant="outline-dark" size = "sm" type = "submit">Search Recipe</Button>
                </form>
            </div>
            <div>No recipe found, please try another </div>
        </div>)
    } else {
        return (
            <div>
                <h3 className="title">Recipe Search</h3>
                <form className = "p-4" onSubmit = {getRecipe}>
                    <input className = "pr-2" value = {inputValue} onChange = {handleChange} type = "text" placeholder="Enter recipe here..." />
                    <Button className = "buttonSearch" variant="outline-dark" size = "sm" type = "submit">Search Recipe</Button>
                </form>
                <div className="recipe-container">
                    <Row>
                    {recipeList && recipeList.map((recipe, index) => {
                        return (
                            <Col key = {index} xs={12} sm={6} md={6} lg={4} xl={3}                        
                            className = "mb-6">
                            <RecipeCard index = {index} recipe = {recipe.recipe} />
                            </Col>
                            )
                    })}
                    </Row>
                </div>
            </div>

        )
    }
}

export default SearchRecipe
