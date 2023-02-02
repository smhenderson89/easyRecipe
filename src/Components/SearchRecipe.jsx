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

    // Change .env variables depend on localhost or on production
    console.log(process.env.NODE_ENV);

    const getRecipe = (event) => {
        try {
            event.preventDefault()
            axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.ID_VAR}&app_key=${process.env.KEY}&q=${inputValue}&calories=500-1000&imageSize=SMALL&time=10-60`,
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
        catch (error) {
            console.log(error);
        }
    }    

    // function created to set the state of inputValue to the value of the input
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // UseEffect for Default API Call:
    const getDefaultRecipe = (event) => {
        try {
            console.log('debug, testing why CORS issue?');
            // console.log(process.env.REACT_APP_ID_VAR);
            // console.log(process.env.REACT_APP__KEY);
            axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.ID_VAR}&app_key=${process.env.KEY}&q=pasta&calories=500-1000&imageSize=SMALL&time=10-60`,
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
            catch (error) {
                console.log(error);
            }
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