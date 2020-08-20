import React from 'react';

import { Container, InputText, Label } from './styles';

interface InputProps {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText />  
    </Container>
  );
}

export default Input;