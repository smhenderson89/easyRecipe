import React from 'react';
import {Col, Row} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function DetailedRecipe(props) {
    const DetailedData = useSelector((state) => state.SeeDetailedRecipe);
    console.log(DetailedData);

    return (
        <div>
          <h4>Detailed Recipe: {props.label} </h4>
            <div className="Detailed-Recipe-card-container">
                <Row>
                    <Col>
                        <h3>Ingredienets</h3>
                    </Col>
                    <Col>
                        <h3>Nutrition</h3>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DetailedRecipe
