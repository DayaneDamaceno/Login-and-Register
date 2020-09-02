import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUpVariants } from '../../styles/animation';
import { Container, FormData, InputData } from './styles';

import { signUpRequest } from '../../store/modules/auth/actions';

function SignUp() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password }) {
    try {
      dispatch(signUpRequest(name, email, password));
    } catch (error) {
      console.tron.error(error);
    }
  }

  return (
    <Container
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={signUpVariants}
    >
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
