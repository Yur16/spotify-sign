import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';

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
  const { navigate } = useNavigation();

  function handleNavigateToSignIn() {
    navigate('SignIn');
  }

  function handleNavigateToSignUp() {
    navigate('SignUp');
  }

  async function handleGoogleSignIn() {
    const { type } = await Google.logInAsync({
      iosClientId: `<IOS_CLIENT_ID>`,
      androidClientId: `<ANDROID_CLIENT_ID>`,
    });

    if (type === 'success') {
      console.log('Logado com sucesso');
    }
  }

  return (
    <Container>
        <MaterialCommunityIcons name="spotify" size={60} color="#fff" />
        
        <Content>
          <Title>Millions of songs. Free on Spotify.</Title>

          <SignUpButton onPress={handleNavigateToSignUp} >
            <Text style={{color: '#fff', fontFamily: 'Poppins_400Regular'}}>
              SIGN UP FREE
            </Text>
          </SignUpButton>

          <SocialSignButton>
            <ButtonIcon source={facebookIcon} />
            <SocialButtonText>CONTINUE WITH FACEBOOK</SocialButtonText>
          </SocialSignButton>

          <SocialSignButton onPress={handleGoogleSignIn} >
            <ButtonIcon source={googleIcon} />
            <SocialButtonText>CONTINUE WITH GOOGLE</SocialButtonText>
          </SocialSignButton>
          
          <TouchableOpacity onPress={handleNavigateToSignIn}>
            <LoginRedirect>log in</LoginRedirect>
          </TouchableOpacity>
        </Content>
      </Container>
  );
}

export default Landing;