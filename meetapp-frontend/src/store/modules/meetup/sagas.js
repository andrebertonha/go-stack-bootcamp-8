import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { createMeetupFailure, createMeetupSuccess } from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, file_id, description, location, date } = payload.data;

    const meetup = { title, file_id, description, location, date };

    const response = yield call(api.post, 'meetups', meetup);
    // console.log(response);
    toast.success('Meetup cadastrado com sucesso!');

    yield put(createMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados de meetup');

    console.tron.log(err);
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meet/CREATE_MEETUP_REQUEST', createMeetup)]);
