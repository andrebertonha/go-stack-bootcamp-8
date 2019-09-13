import React from 'react';
import { FileInput, Input, Form } from '@rocketseat/unform';
import { Container } from './styles';

export default function Meetup() {
  return (
    <Container>
      <Form>
        <FileInput id="meetup" accept="image/*" name="attach" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
