import React from "react";
import { Col, Row } from "react-bootstrap";

import './css/SelectionComponent.css';

function SelectionComponent() {
  return (
    <div className="selection-wrap">
      <Row lg={3} md={1} sm={1} xs={1}>
        <Col>
          <div className="selection">
            <p>Fresh Food</p>
            <div>
              <em>
                Whether you`d like a great value-for-money lunch or a relaxed
                evening meal in stylish surroundings, this is the place for you.
              </em>
            </div>
          </div>
        </Col>
        <Col>
          <div className="selection">
            <p>Chef`s Special</p>
            <div>
              <em>
                The chefs have all been trained in Italy and they make both
                traditional and contemporary dishes. We recommend the pasta and
                seafood.
              </em>
            </div>
          </div>
        </Col>
        <Col>
          <div className="selection">
            <p>Good Wines</p>
            <div>
              <em>
                Check out our 18 different grape varieties, commonly referred to
                as international varieties, like Moscato and Riesling to deep
                dark red wines like Syrah and Cabernet Sauvignon.
              </em>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SelectionComponent;
