import React from 'react';

import { Container, ButtonText } from './styles';

interface ButtonProps {
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Container >
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}

export default Button;