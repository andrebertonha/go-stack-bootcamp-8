import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  registerLocale('pt', pt);
  return (
    <>
      <ReactDatePicker
        locale="pt"
        showTimeSelect
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        timeIntervals={60}
        placeholderText={placeholder}
        utcOffSet="-03:00"
        timeFormat="HH:mm"
        dateFormat="d MMMM, HH:mm"
      />
      {error && <span>{error}</span>}
    </>
  );
}
