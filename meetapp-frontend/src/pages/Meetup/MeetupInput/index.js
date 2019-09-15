import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../services/api';

export default function MeetupInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id } = response.data;
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
  }, [ref, registerField]);

  return (
    <label htmlFor="file_id">
      <input
        type="file"
        id="meetup"
        accept="image/*"
        data-file={file}
        onChange={handleChange}
        ref={ref}
      />
    </label>
  );
}
