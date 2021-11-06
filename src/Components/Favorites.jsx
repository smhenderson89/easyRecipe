import React from 'react'
import {Col, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

function Favorites() {
    const FavoritesData = useSelector((state) => state.FavoritesList);

    // TODO: Enable Reactive search for favorite recipes

    return (
        <div>
            <h1>Favorites</h1>
            <div className="recipe-container">s
                <Row>
                {FavoritesData && FavoritesData.map((recipe, index) => {
                    return (
                        <Col key = {index} xs={12} sm={6} md={6} lg={4} xl={3} className = "mb-6">
                        <RecipeCard index = {index} recipe = {recipe} />
                        </Col>
                        )
                })}
                </Row>
            </div>
        </div>
    )
}

export default Favorites
