import React from 'react';
import { Link } from 'react-router-dom';

import log from '../../assets/ilustLog.svg';
import { Container, Login, Form, Input } from './styles';

function SignIn() {
  return (
    <Container>
      <Login>
        <h1>Log in to profile</h1>
        <p>Discover and have fun on our platform</p>
        <Form>
          <label htmlFor="email">E-mail</label>
          <Input
            type="email"
            name="email"
            spellCheck="false"
            autoComplete="off"
            placeholder="Insert your e-mail address"
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="Password secret"
          />

          <button type="submit">Entrar</button>
        </Form>
        <Link to="/register">Não tem conta? Inscreva-se</Link>
      </Login>
      <img src={log} alt="log" />
    </Container>
  );
}

export default SignIn;
