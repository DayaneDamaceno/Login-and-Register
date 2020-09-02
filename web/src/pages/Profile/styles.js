import styled from 'styled-components';
import { motion } from 'framer-motion';
import { animated } from 'react-spring';

export const Container = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Image = styled(animated.img)`
  height: 150px;
  border: 4px solid #f5487f;
  border-radius: 50%;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  h1 {
    color: #fff;
    font-size: 20px;
  }

  p {
    font-size: 18px;
    color: #b3b2c8;
    font-weight: 500;
    margin: 10px 0 15px;
  }

  button {
    margin-top: auto;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #f5487f;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;

    &:hover {
      background: #c93967;
    }
  }

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    text-align: center;
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`;
