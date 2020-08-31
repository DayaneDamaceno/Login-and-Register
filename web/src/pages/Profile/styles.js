import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  justify-content: space-between;
`;
export const Image = styled(animated.img)`
  height: 150px;
  border: 4px solid #f5487f;
  border-radius: 50%;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
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
`;
