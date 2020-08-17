import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding-top: 40%;

  background: #000;
`;
export const Content = styled.View`
  width: 100%;
  align-items: center;
  padding: 30px;
`;
export const Title = styled.Text`
  color: #fff;
  font-family: Poppins_700Bold;
  font-size: 26px;
  margin-bottom: 30px;

  max-width: 300px;
`;

export const SignUpButton = styled(RectButton)`
  background: #57B65F;
  color: #fff;
  padding: 10px;
  width: 100%;
  height: 46px;
  margin-top: 30px;
  border-radius: 23px;

  align-items: center;
  justify-content: center;
`;

export const SocialSignButton = styled.TouchableOpacity`
  color: #fff;
  border-width: 1px;
  border-color: #414141;
  flex-direction: row;
  margin-top: 10px;

  padding: 15px;
  width: 100%;
  height: 46px;
  border-radius: 23px;

  align-items: center;
`;

export const ButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const SocialButtonText = styled.Text`
  color: #fff;
  font-family: Poppins_400Regular;
  font-size: 13px;
  margin-left: 20px;
`;

export const LoginRedirect = styled.Text`
  color: #fff;
  font-family: Poppins_400Regular;
  font-size: 13px;
  margin-top: 15px;

  text-transform: uppercase;
`;

