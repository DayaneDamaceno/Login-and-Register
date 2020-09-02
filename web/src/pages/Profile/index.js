import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPowerOff } from 'react-icons/fa';
import { useSpring } from 'react-spring';

import { profileVariants, calc, trans } from '../../styles/animation';
import { Container, Image, ProfileInfo } from './styles';

import { signOut } from '../../store/modules/auth/actions';

function Profile() {
  const user = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.8],
    config: { mass: 1, tension: 400, friction: 10 },
  }));

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container
      variants={profileVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image
        src={`https://api.adorable.io/avatars/${user.id}`}
        alt="Avatar"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 0.8] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
      <ProfileInfo>
        {user && <h1>Hi! {user.name}</h1>}
        <p>Welcome to your profile</p>
        <button type="button" onClick={handleLogOut}>
          Exit
          <FaPowerOff size={15} color="#fff" />
        </button>
      </ProfileInfo>
    </Container>
  );
}

export default Profile;
