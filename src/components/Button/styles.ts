import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #4D4D4D;
  height: 46px;
  padding: 0 60px;

  border-radius: 23px;
  align-self: center;

  align-items: center;
  justify-content: center;

  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  font-family: Poppins_600SemiBold;
  color: #000;

  text-transform: uppercase;
`;