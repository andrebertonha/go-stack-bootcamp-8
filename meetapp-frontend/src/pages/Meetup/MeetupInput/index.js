import React, { useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../services/api';

export default function MeetupInput() {
  const { defaultValue } = useField('file');
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id } = response.data;
    setFile(id);
  }

  return (
    <label htmlFor="file_id">
      <input
        type="file"
        id="file_id"
        accept="image/*"
        data-file={file}
        onChange={handleChange}
        ref={ref}
      />
    </label>
  );
}
