import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Form } from '@unform/web';
import Input from '../../components/Input';

export const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 100px;

  @media (max-width: 1200px) {
    justify-content: space-around;
    padding: 0;
    img {
      height: 300px;
    }
  }

  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;
export const Login = styled(motion.div)`
  width: 30%;
  color: white;

  @media (max-width: 900px) {
    width: 65%;
  }

  @media (max-width: 500px) {
    width: 85%;
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    color: #f5487f;
  }

  p {
    color: #7b7990;
    margin: 10px 0 20px;
    font-weight: 500;
    font-size: 16px;
  }
  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    width: 65%;
  }

  @media (max-width: 500px) {
    width: 85%;
  }

  @media (max-width: 300px) {
    width: 95%;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;

  button {
    height: 45px;
    border-radius: 3px;
    background: #f5487f;
    color: #fff;
    margin: 5px 0 15px;
    transition: background 0.2s;

    img {
      height: 45px;
    }

    &:hover {
      background: #c93967;
    }
  }
`;

export const InputData = styled(Input)`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 3px;
  background: #2f3b52;
  margin: 10px 0 15px;
  color: #fff;

  &:focus {
    border: 2px solid #f5487f;
  }

  &::placeholder {
    color: #75839d;
  }
`;
