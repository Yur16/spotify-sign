import * as React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import facebookIcon from '../../assets/facebook.png';
import googleIcon from '../../assets/google.png';

import {
  Container,
  Content,
  Title,
  SignUpButton,
  SocialSignButton,
  ButtonIcon,
  SocialButtonText,
  LoginRedirect
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
        <MaterialCommunityIcons name="spotify" size={50} color="#fff" />
        
        <Content>
          <Title>Millions of songs. Free on Spotify.</Title>

          <SignUpButton>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>SIGN UP FREE</Text>
          </SignUpButton>

          <SocialSignButton>
            <ButtonIcon source={facebookIcon} />
            <SocialButtonText>CONTINUE WITH FACEBOOK</SocialButtonText>
          </SocialSignButton>

          <SocialSignButton>
            <ButtonIcon source={googleIcon} />
            <SocialButtonText>CONTINUE WITH GOOGLE</SocialButtonText>
          </SocialSignButton>
          
          <LoginRedirect>log in</LoginRedirect>
        </Content>
      </Container>
  );
}

export default Landing;