import { Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import './css/ServicesMenuComponent.css';

function handleClick(event) // menu of services button clicks handler
{
    const undispay_container_id =  document.getElementsByClassName('menu-selection-selected')[0].getAttribute('id');
    const event_target_id = event.target.getAttribute('id');

    document.getElementsByClassName('menu-selection-selected')[0].classList.remove('menu-selection-selected');

    event.target.classList.add('menu-selection-selected');

    document.getElementById((undispay_container_id + '-container')).classList.add('display-none');
    document.getElementById((event_target_id + '-container')).classList.remove('display-none');
}

function ServicesMenuComponent() {
  return (
    <div className="services-menu-wrap">
      <div className="services-menu-label">
        <h1>Menu</h1>
      </div>
      <div className="services-menu-selection-wrap">
        <Container className="selection-buttons-container">
          <ButtonGroup size="large">
            <Button
              variant="outlined"
              className="menu-selection-button menu-all menu-selection-selected"
              id="first"
              onClick={handleClick}
            >
              Specials
            </Button>
            <Button
              variant="outlined"
              className="menu-selection-button menu-meals"
              id="second"
              onClick={handleClick}
            >
              Meals
            </Button>
            <Button
              variant="outlined"
              className="menu-selection-button menu-drinks"
              id="third"
              onClick={handleClick}
            >
              Drinks
            </Button>
          
          </ButtonGroup>
        </Container>
        <div className="menu-selection-variants">
          <Container id="first-container">
            <div className="menu-selections-wrap">
              <Row xxl={"8"} xl={"4"} lg={"4"} md={"3"} sm={"2"} xs={"1"}>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Indian Butter Chicken3.jpg" 
                        alt="Indian Butter Chicken"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Indian Butter Chicken
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="\images\specials\injera1.jpg"
                        alt="Injera"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Injera
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Irish Colcannon Potatoes.png"
                        alt="Irish Colcannon Potatoes"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Irish Colcannon Potatoes
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Italian Margherita Pizza.png"
                        alt="Italian Margherita Pizza"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Italian Margherita Pizza
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Japanese Sushi Rolls.jpg"
                        alt="Japanese Sushi Rolls.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Japanese Sushi Rolls
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Mughlai Style Chicken2.jpg"
                        alt="Mughlai Style Chicken"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Mughlai Style Chicken
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Spanish Paella Valenciana.jpg"
                        alt="Spanish Paella Valenciana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Paella Valenciana
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/specials/Thai Pad Thai.png"
                        alt="Thai Pad Thai"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Thai Pad Thai
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <Container id="second-container" className="display-none">
            <div className="menu-selections-wrap">
              <Row xxl={"8"} xl={"4"} lg={"4"} md={"3"} sm={"2"} xs={"1"}>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Broccoli Chicken Casserole.jpg"
                        alt="Broccoli Chicken Casserole"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Broccoli Chicken Casserole
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Chicken and Gravy.jpg"
                        alt="Chicken and Gravy"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chicken and Gravy
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Chicken Potpie.jpg"
                        alt="Chicken Potpie"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chicken Potpie
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Cream of Celery Soup.jpg"
                        alt="Cream of Celery Soup"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Cream of Celery Soup
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Hungarian Chicken Paprikash.jpg"
                        alt="Hungarian Chicken Paprikash"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Hungarian Chicken Paprikash
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Potluck Macaroni and Cheese.jpg"
                        alt="Potluck Macaroni and Cheese"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Potluck Macaroni and Cheese
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Shrimp Quesadilla.jpg"
                        alt="Shrimp Quesadilla"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Shrimp Quesadilla
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/meals/Traditional Meat Loaf.jpg"
                        alt="Traditional Meat Loaf"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Traditional Meat Loaf
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <Container id="third-container" className="display-none">
            <div className="menu-selections-wrap">
              <Row xxl={"8"} xl={"4"} lg={"4"} md={"3"} sm={"2"} xs={"1"}>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/apple juice.jpg"
                        alt="apple juice"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Apple Juice
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/beer.jpg"
                        alt="beer"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Beer
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/coffee.jpg"
                        alt="Coffee"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Coffee
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/orange juice.jpg"
                        alt="orange juice"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Orange Juice
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/red wine.jpg"
                        alt="red wine"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Red Wine
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/sprite.jpg"
                        alt="sprite"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        sprite
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/tea.jpg"
                        alt="Tea"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Tea
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
                <Col>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/images/drinks/coke.jpg"
                        alt="Coke"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Coke
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          
        </div>
      </div>
    </div>
  );
}

export default ServicesMenuComponent;
