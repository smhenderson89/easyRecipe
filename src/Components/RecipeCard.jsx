import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setRecipeList } from "../redux/actions/FavoriteRecipe-actions";
import { SetDeailedInfo } from "../redux/actions/SeeDetailed-actions";
import { FaRegHeart } from "react-icons/fa"; // Heart empty icon
import { BsInfoSquare } from "react-icons/bs"; // Information Icon
import { BsSuitHeartFill } from "react-icons/bs"; // Heart filled icon

const RecipeCard = (props) => {
  const dispatch = useDispatch();
  const singleRecipe = props.recipe;

  const detailedInfo = (recipe) => {
    dispatch(SetDeailedInfo(recipe));
  };

  // Change heart icon when favorited the recipe
  const savedRecipe = useSelector((state) => {
    return state.Favorites.find(
      (recipe) => recipe.label === props.recipe.label
    );
  });

  // Return recipe card
  return (
    <div className="Recipe-card-container">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          className="recipe-pic"
          variant="top"
          src={singleRecipe.image}
        />
        <Card.Body>
          <Card.Title>{singleRecipe.label}</Card.Title>
          <div> Time to Make: {singleRecipe.totalTime} min </div>
          <div>
            {" "}
            Calories: {Math.round(
              singleRecipe.calories / singleRecipe.yield
            )}{" "}
          </div>
          <div> Servings: {singleRecipe.yield} </div>

          <div>
            Source: <a href={singleRecipe.url}>{singleRecipe.source}</a>
          </div>
          <Container>
            <Row>
              <Col>
                <div>
                  <Link
                    to="/Detailed"
                    Button
                    onClick={() => detailedInfo(singleRecipe)}>
                    <BsInfoSquare size="24" className="react-icon" />
                  </Link>
                </div>
              </Col>
              <Col>
                <div>
                  {savedRecipe ? (
                    <BsSuitHeartFill />
                  ) : (
                    <FaRegHeart
                      className="react-icon"
                      size="24"
                      onClick={() => dispatch(setRecipeList(singleRecipe))}
                    ></FaRegHeart>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;