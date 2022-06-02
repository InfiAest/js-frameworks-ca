import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import DisplayMessage from "../components/messages/DisplayMessage";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your name")
    .min(3, "First name must be at least 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your name")
    .min(4, "Last name must be at least 4 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup
    .string()
    .oneOf(["movies", "directors", "other"])
    .required("Please choose a subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
  }

  console.log(errors);

  return (
    <Layout>
      <Head title="Contact" />

      <Container className="content-container">
        <Heading>Contact</Heading>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 mb-5">
          {submitted && (
            <DisplayMessage
              variant="success"
              heading="Yippee!"
              message="Your message has been sent successfully"
            />
          )}
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register("firstname")}
            />
            {errors.firstname && <span>{errors.firstname.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register("lastname")}
            />
            {errors.lastname && <span>{errors.lastname.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Select defaultValue={null} {...register("subject")}>
              <option value=""></option>
              <option value="movies">Movies</option>
              <option value="directors">Directors</option>
              <option value="other">Other</option>
            </Form.Select>
            {errors.subject && <span>{errors.subject.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTextArea">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Please write your message here"
              {...register("message")}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </div>
        </Form>
      </Container>
    </Layout>
  );
}
