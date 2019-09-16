import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';

import api from '../../../services/api';

import { Container, MeetupContainer } from './styles';

export default function MeetupInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);


  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;

    setPreview(url);
    setFile(id);
  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); //eslint-disable-line

  return (
    <Container>
      <MeetupContainer htmlFor="file_id" src={preview}>
        <div>
          <MdCameraAlt size={55} color="#FFF" />
        </div>
        <input
          type="file"
          id="meetup"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </MeetupContainer>
    </Container>
  );
}
