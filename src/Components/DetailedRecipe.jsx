import React from "react";
import { Row, Image, ListGroup, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

function DetailedRecipe(props) {
  const DetailedData = useSelector((state) => state.DetailedReducer);
  const OneRecipe = DetailedData[0];
  const RecipleList = OneRecipe.ingredientLines;
  const HealthLabels = OneRecipe.healthLabels;

  // TODO: (Stretch) Convert RecipeList into the number and name seperated into each other


  
  return (
    <div>
      <h4>Detailed Recipe: {OneRecipe.label} </h4>
      <div className="Detailed-Recipe-card-container">
        <Row>
          <Image
            src={OneRecipe.image}
            style={{ width: "75%" }}
            className="detailedRecipePic"
          />
        </Row>
        <div> Time to Make: {OneRecipe.totalTime} </div>
        <div>
          {" "}
          Calories: {Math.round(OneRecipe.calories / OneRecipe.yield)}{" "}
        </div>
        <div> Servings: {OneRecipe.yield} </div>
        <div>
          {" "}
          {OneRecipe.source} <a href={OneRecipe.url}>link</a>
        </div>
        <Row>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Ingredients" title="Ingredients">
              <ListGroup>
                {RecipleList &&
                  RecipleList.map((ingredient, index) => {
                    return <ListGroup.Item key = {index}>{ingredient}</ListGroup.Item>;
                  })}
              </ListGroup>
            </Tab>
            <Tab eventKey="Health Labels" title="Health Labels">
              <ListGroup>
                {HealthLabels &&
                  HealthLabels.map((label, index) => {
                    return <ListGroup.Item key = {index}>{label}</ListGroup.Item>;
                  })}
              </ListGroup>
            </Tab>
            <Tab eventKey="Shopping List" title="Shopping List">
              <form>
                {RecipleList &&
                  RecipleList.map((ingredient, index) => {
                    return (
                      <div key = {index}>
                        <div>
                          <input
                            key = {index}
                            type="checkbox"
                            className="largerCheckbox"
                            id={index}
                            name={index}
                            value={ingredient}
                          ></input>
                          <label htmlFor={index}>{ingredient}</label>
                        </div>
                      </div>
                    );
                  })}
              </form>
            </Tab>
          </Tabs>
        </Row>
      </div>
    </div>
  );
}

export default DetailedRecipe;
