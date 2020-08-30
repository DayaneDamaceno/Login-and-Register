import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { Container, Image, ProfileInfo } from './styles';

import avatar from '../../assets/avatar.svg';

function Profile() {
  return (
    <Container>
      <Image src={avatar} />
      <ProfileInfo>
        <h1>Hi Mayane Almeida Damaceno</h1>
        <p>Welcome to your profile</p>

        <button>
          Exit
          <FaPowerOff size={15} color="#fff" />
        </button>
      </ProfileInfo>
    </Container>
  );
}

export default Profile;
