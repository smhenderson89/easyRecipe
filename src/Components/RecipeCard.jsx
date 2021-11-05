import React from "react";
import { Card, Button } from "react-bootstrap";

const RecipeCard = (props) => {
    console.log('Test container: ' + props.index);
    const singleRecipe = props.recipe;

    return (
        <div className="Recipe-card-container">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={singleRecipe.image} />
                <Card.Body>
                    <Card.Title>{singleRecipe.label}</Card.Title>
                    <div> Time to Make: {singleRecipe.totalTime} </div>
                    <div> Calories: {Math.round(singleRecipe.calories / singleRecipe.yield)} </div>
                    <div> Servings: {singleRecipe.yield} </div> 

                <Button variant="primary">Source</Button> <a href = {singleRecipe.url}>Link</a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;
