import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { Container, Time } from './styles';

const moment = require('moment');

export default function Dashboard() {
  const token = useSelector(state => state.user.token);

  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('meetups', {
        params: { token },
      });

      setMeetup(response.data);
    }

    loadMeetup();
  }, [token]);

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button">Novo meetup</button>
      </header>
      <ul>
        {meetup.map(meet => (
          <Time key={meet.id} past={meet.past} available={!meet.meetup}>
            <div>{meet.title}</div>
            {moment(meet.date).format('DD[ de ]MMMM[, às ]hh[h]')}
          </Time>
        ))}
      </ul>
    </Container>
  );
}
