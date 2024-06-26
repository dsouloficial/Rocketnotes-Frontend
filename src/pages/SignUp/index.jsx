import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { ButtonLink } from "../../../src/components/Button";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all the fields!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Unable to register!");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application for save and manage your links!</p>
        <h2>Create your account!</h2>

        <Input
          placeholder="Username"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonLink title="Register" onClick={handleSignUp} />

        <Link to="/">Back To Login</Link>
      </Form>
    </Container>
  );
}
