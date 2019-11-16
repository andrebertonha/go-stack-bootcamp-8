import React from 'react';
import format from 'date-fns/format';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';

import { parseISO } from 'date-fns';
import { createMeetupRequest } from '../../store/modules/meetup/actions';

import MeetupInput from './MeetupInput';
import DatePicker from '../../components/DatePicker';
import { Container } from './styles';

export default function Meetup() {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.meetup);

  console.log(meetup, 'teste');

  meetup.date = parseISO(meetup.date);

  function handleSubmit(data) {
    data.date = format(data.date, "yyyy-MM-dd'T'HH:mm:ss-03:00");
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do Meetup" />
        <MeetupInput name="file_id" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
