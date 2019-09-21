import React from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} alt="Meet App" />
        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>
            Entrar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
