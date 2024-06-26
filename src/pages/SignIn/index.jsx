import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { ButtonLink } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password});
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application for save and manage your links!</p>
        <h2>Make your login</h2>

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
        <ButtonLink title="Login" onClick={handleSignIn} />

        <Link to="/register">Sign Up</Link>
      </Form>
      <Background />
    </Container>
  );
}
