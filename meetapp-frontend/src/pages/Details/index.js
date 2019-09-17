import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import moment from 'moment';
import {
  Container,
  Time,
  ActionContainer,
  EditButton,
  CancelButton,
} from './styles';

import api from '../../services/api';

import {
  editMeetupRequest,
  getMeetupRequest,
} from '../../store/modules/meetup/actions';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.meetup);

  const { defaultValue, registerField } = useField('file');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  const { id } = match.params;

  useEffect(() => {
    dispatch(getMeetupRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  useEffect(() => {
    async function getMeetFile() {
      const response = await api.get(`/file/${meetup.file_id}`);
      const { idFile, url } = response.data;

      setPreview(url);
      setFile(idFile);
    }
    getMeetFile();
  }, [id, meetup.file_id]);

  function handleEditMeet() {
    dispatch(editMeetupRequest(meetup));
  }

  function handleCancelMeet() {}

  return (
    <Container>
      <header>
        <strong>Meetup: {meetup.title} </strong>
        <ActionContainer>
          <EditButton onClick={handleEditMeet}>
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </EditButton>
          <CancelButton onClick={handleCancelMeet}>
            <MdDeleteForever size={20} color="#fff" />
            <span>Cancelar</span>
          </CancelButton>
        </ActionContainer>
      </header>
      <img src={preview} data-file={file} alt="" />

      <span>{meetup.description}</span>
      <span>
        Caso queira participar como palestrante do meetup enviar um e-mail para
        org@meetupsp.com.br.
      </span>
      <Time>
        <strong>
          {moment(meetup.date).format('DD[ de ]MMMM[, às ]hh[h]')}
        </strong>
        <span>{meetup.location}</span>
      </Time>
    </Container>
  );
}
