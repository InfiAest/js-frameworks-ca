import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Heading from "../components/heading/Heading";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

export default function Home(props) {
  console.log(props);

  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const toggleFavs = (id, title, image, date) => {
    const itemExists = favourites.find(function (film) {
      return film.id === id;
    });

    if (!itemExists) {
      // console.log("film does not exist in favourites");
      setFavourites([
        ...favourites,
        { id: id, title: title, image: image, date: date },
      ]);
    } else {
      // console.log("film exists", itemExists);
      setFavourites([...favourites.filter((film) => film.id !== id)]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

//FOR TEACHER - I could not figure out how to change the heart button to a different
//colour depending on if it was in the favourites array or not.
//I managed to make it change every heart icon colour when you add or remove
//an item from the favourites array but I do not understand how to make it change
//only the specific heart for that item.
//The same goes for rendering a message on the favs page when the favourites array is empty.
//If it's possible to get some feedback about how to achieve this I would be very grateful! :)

  // function checkHeartStatus() {
  //   const heartButtons = document.querySelectorAll(".fa-heart");
  //   heartButtons.forEach((heart) => {
  //     // console.log(heart.dataset.id)
  //     const favExists = favourites.find(function (film) {
  //       return film.id === heart.dataset.id;
  //     });
  //     if(favExists) {
  //       console.log("It's favourited:", heart.dataset.id)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   checkHeartStatus();
  // })

  return (
    <Layout>
      <Head title="Home" />

      <Container className="content-container">
        <Heading>Studio Ghibli films</Heading>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {props.films.map((film) => {
            return (
              <Col key={film.id}>
                <Card className="cards">
                  <Image
                    src={film.image}
                    width="384"
                    height="576"
                    alt={film.title}
                  />
                  <Card.Body>
                    <FontAwesomeIcon
                      type="button"
                      data-id={film.id}
                      icon={fullHeart}
                      onClick={() =>
                        toggleFavs(
                          film.id,
                          film.title,
                          film.image,
                          film.release_date
                        )
                      }
                    />
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Text>{film.release_date}</Card.Text>
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

export async function getStaticProps() {
  let films = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);

    films = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      films: films,
    },
  };
}
