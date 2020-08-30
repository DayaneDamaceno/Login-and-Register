import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Input } from './styles';

function SignUp() {
  return (
    <Container>
      <Form>
        <h1>SignUp</h1>
        <p>Discover and have fun on our platform</p>

        <label htmlFor="name">Name</label>
        <Input
          name="name"
          autoComplete="off"
          placeholder="Insert your name here"
        />

        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          name="email"
          spellCheck="false"
          autoComplete="off"
          placeholder="Insert your e-mail address"
        />
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" placeholder="Password secret" />

        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/">Já tem conta? Acessar</Link>
    </Container>
  );
}

export default SignUp;
