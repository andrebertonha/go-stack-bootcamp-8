import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import api from '../../services/api';
import { Container, Time } from './styles';

import history from '../../services/history';

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

  function handleDetail(id) {
    history.push(`/details/${id}`);
  }

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/meetup">Novo meetup</Link>
      </header>
      <ul>
        {meetup.map(meet => (
          <Time key={meet.id} past={meet.past} available={!meet.meetup}>
            <div>{meet.title}</div>
            {moment(meet.date).format('DD[ de ]MMMM[, às ]hh[h]')}
            <div>
              <button type="button" onClick={() => handleDetail(meet.id)}>
                <MdChevronRight size={24} color="#fff" />
              </button>
            </div>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
