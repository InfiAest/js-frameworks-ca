import Heading from "../components/heading/Heading";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import DisplayMessage from "../components/messages/DisplayMessage";

export default function Favourites() {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const removeFav = (id) => {
    setFavourites([...favourites.filter((film) => film.id !== id)]);
  };

  useEffect(() => {
    localStorage.getItem("favourites");
  }, [favourites]);

  console.log(favourites);

  return (
    <Layout>
      <Head title="Favourites" />
      <Container className="content-container">
        <Heading>Favourites</Heading>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {!favourites || favourites.length == 0 ? (
              <>
                <DisplayMessage variant="info" heading="No favourites yet" message="Try going to the home page and adding some films to your favourites!" />
              </>
            ) : favourites.map((film) => {
            return (
              <Col key={film.id}>
                <Card className="cards">
                  <FontAwesomeIcon
                    icon={fullHeart}
                    onClick={() => removeFav(film.id)}
                  />
                  <Image
                    src={film.image}
                    width="384"
                    height="576"
                    alt={film.title}
                  />
                  <Card.Body>
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Text>{film.date}</Card.Text>
                    <div className="d-grid gap-2">
                      <Button variant="primary" href={`detail/${film.id}`}>
                        See more
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
}
