import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { ADMIN_URL, TOKEN_PATH } from "../constants/api";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Heading from "../components/heading/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import DisplayMessage from "../components/messages/DisplayMessage";

const url = ADMIN_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);
  const router = useRouter();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("Response", response);
      setAuth(response.data);
      console.log("Success");
      return router.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(
        "There seems to be a problem logging in - check your details and try again"
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      <Head title="Login" />

      <Container className="content-container">
        <Heading>Login</Heading>

        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 mb-5">
          {loginError && (
            <DisplayMessage
              variant="danger"
              heading="Oh something is wrong!"
              message={loginError}
            />
          )}
          <fieldset disabled={submitting}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register("username")}
              />
              {errors.username && <span>{errors.username.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                {submitting ? "Logging in..." : "Login"}
              </Button>
            </div>
          </fieldset>
        </Form>
      </Container>
    </Layout>
  );
}
