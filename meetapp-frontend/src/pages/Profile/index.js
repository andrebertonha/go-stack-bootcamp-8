import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <ul>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="email" />
          <Input name="oldPassword" type="password" placeholder="Senha atual" />
          <Input name="password" type="password" placeholder="Nova Senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmação de Senha"
          />
          <button type="submit">Salvar perfil</button>
        </Form>
      </ul>
    </Container>
  );
}
