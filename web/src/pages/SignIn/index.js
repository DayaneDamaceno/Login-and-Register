import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import log from '../../assets/ilustLog.svg';
import load from '../../assets/load.svg';
import { Container, Login, FormData, InputData } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

function SignIn() {
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

          <button type="submit">
            {loading ? <img src={load} alt="load" /> : 'Entrar'}
          </button>
        </FormData>
        <Link to="/register">Não tem conta? Inscreva-se</Link>
      </Login>
      <img src={log} alt="log" />
    </Container>
  );
}

export default SignIn;
