import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FormData, InputData } from './styles';

function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <FormData onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <p>Discover and have fun on our platform</p>

        <label htmlFor="name">Name</label>
        <InputData
          name="name"
          autoComplete="off"
          placeholder="Insert your name here"
        />

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

        <button type="submit">Cadastrar</button>
      </FormData>
      <Link to="/">Já tem conta? Acessar</Link>
    </Container>
  );
}

export default SignUp;
