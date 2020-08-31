import React from 'react';
import { Link } from 'react-router-dom';

import log from '../../assets/ilustLog.svg';
import { Container, Login, FormData, InputData } from './styles';

function SignIn() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Container>
      <Login>
        <h1>Log in to profile</h1>
        <p>Discover and have fun on our platform</p>
        <FormData onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <InputData
            type="email"
            name="email"
            spellCheck="false"
            autoComplete="off"
            placeholder="Insert your e-mail address"
          />
          <label htmlFor="password">Password</label>
          <InputData
            type="password"
            name="password"
            placeholder="Password secret"
          />

          <button type="submit">Entrar</button>
        </FormData>
        <Link to="/register">Não tem conta? Inscreva-se</Link>
      </Login>
      <img src={log} alt="log" />
    </Container>
  );
}

export default SignIn;
