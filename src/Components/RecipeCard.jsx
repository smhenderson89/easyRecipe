import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setRecipeList } from '../redux/actions/FavoriteRecipe-actions';
import { SeeDetailedRecipe } from "../redux/reducers/SeeDetailedReducer";
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const dispatch = useDispatch();
    const singleRecipe = props.recipe;

    return (
        <div className="Recipe-card-container">
            <Card style={{ width: "18rem" }}>
                <Card.Img className = "recipe-pic" variant="top" src={singleRecipe.image} />
                <Card.Body>
                    <Card.Title>{singleRecipe.label}</Card.Title>
                    <div> Time to Make: {singleRecipe.totalTime} </div>
                    <div> Calories: {Math.round(singleRecipe.calories / singleRecipe.yield)} </div>
                    <div> Servings: {singleRecipe.yield} </div> 
                    <Link to = '/Detailed' onClick = {() => dispatch(SeeDetailedRecipe(singleRecipe))} >See More</Link>
                    {/* } Link that is dynamical based on the API Call */}
                <div>Source: <a href = {singleRecipe.url}>{singleRecipe.source}</a></div>
                <div><Button onClick = {() => dispatch(setRecipeList(singleRecipe))}>Add Favorites</Button></div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;
