import React from 'react';

import { Container, LogInButton, LogInButtonText } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Input label="Email or username" />
      <Input label="Password" />
      <Button text="log in" />
      <LogInButton>
        <LogInButtonText>LOG IN WITHOUT PASSWORD</LogInButtonText>
      </LogInButton>
    </Container>
  );
}

export default SignIn;