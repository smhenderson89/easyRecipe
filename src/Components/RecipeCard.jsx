import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setRecipeList } from '../redux/actions/FavoriteRecipe-actions';
import { SetDeailedInfo } from "../redux/actions/SeeDetailed-actions";
// import { useNavigate } from "react-router-dom";

const RecipeCard = (props) => {
    const dispatch = useDispatch();
    const singleRecipe = props.recipe;

    const detailedInfo = (recipe) => {
        dispatch(SetDeailedInfo(recipe))
        console.log('updating state');

        console.log('Switch to detailed component');
    } 
    
    return (
        <div className="Recipe-card-container">
            <Card style={{ width: "18rem" }}>
                <Card.Img className = "recipe-pic" variant="top" src={singleRecipe.image} />
                <Card.Body>
                    <Card.Title>{singleRecipe.label}</Card.Title>
                    <div> Time to Make: {singleRecipe.totalTime} min </div>
                    <div> Calories: {Math.round(singleRecipe.calories / singleRecipe.yield)} </div>
                    <div> Servings: {singleRecipe.yield} </div> 
                <div>
                    <Link to ="/Detailed">
                        <Button onClick = {() => detailedInfo(singleRecipe)}>
                        See More</Button>
                    </Link>
                </div>
                <div>Source: <a href = {singleRecipe.url}>{singleRecipe.source}</a></div>
                <div><Button onClick = {() => dispatch(setRecipeList(singleRecipe))}>Add Favorites</Button></div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;

// Link function 
// Add specifc to Detailed state
// Trigger react to the Detail Componet with Detailed state