import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const LogInButton = styled.TouchableHighlight`
  border-width: 1px;
  border-color: #414141;
  border-radius: 15px;

  padding: 0 30px;
  align-self: center;
  height: 30px;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
`;

export const LogInButtonText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-family: Poppins_400Regular;
`;
