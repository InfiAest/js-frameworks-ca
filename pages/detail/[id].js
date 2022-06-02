import axios from "axios";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { BASE_URL } from "../../constants/api";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Film({ film }) {
  return (
    <Layout>
      <Container className="content-container">
        <Head title={film.title} />
        <Card>
          <Image
            src={film.movie_banner}
            width="1000"
            height="562"
            alt={film.title}
          />
          <Card.Body>
            <Card.Title>{film.title}</Card.Title>
            <Card.Subtitle className="mt-2 mb-2">
              {film.original_title} ({film.original_title_romanised})
            </Card.Subtitle>
            <Card.Text className="description">{film.description}</Card.Text>
            <Card.Text>
              <span className="boldText">Released:</span> {film.release_date}
            </Card.Text>
            <Card.Text>
              <span className="boldText">Director:</span> {film.director}
            </Card.Text>
            <Card.Text>
              <span className="boldText">Producer:</span> {film.producer}
            </Card.Text>
            <Card.Text>
              <span className="boldText">Rotten tomato score:</span>{" "}
              {film.rt_score}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);

    const films = response.data;

    const paths = films.map((film) => ({
      params: { id: film.id },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}/${params.id}`;

  let film = null;

  try {
    const response = await axios.get(url);
    film = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { film: film },
  };
}
