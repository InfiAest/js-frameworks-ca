import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";

export default function Admin() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      return router.push("/");
    }
  }, []);
  return (
    <Layout>
      <Head title="Admin" />

      <Container className="content-container">
        <Heading>Admin</Heading>
      </Container>
    </Layout>
  );
}
