import React from 'react'
import {Col, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import NoFavorites from './NoFavorites';


export default function Favorites() {
    const FavoritesData = useSelector((state) => state.Favorites);
    if (FavoritesData.length === 0) {
        return <NoFavorites />
    } else {
        return (
            <div>
                <h1 >Favorites</h1>
                <div className="recipe-container">
                    <Row>
                    {FavoritesData && FavoritesData.map((recipe, index) => {
                        return (
                            <Col key = {index} xs={12} sm={6} md={6} lg={4} xl={3} 
                            className = "mb-6">
                            <RecipeCard index = {index} recipe = {recipe} />
                            </Col>
                            )
                    })}
                    </Row>
                </div>
            </div>
        )
    }
}