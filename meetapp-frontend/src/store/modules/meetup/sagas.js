import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import {
  createMeetupFailure,
  createMeetupSuccess,
  getMeetupFailure,
  getMeetupSuccess,
  editMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, file_id, description, location, date } = payload.meetup;
    const meetup = { title, file_id, description, location, date };

    const response = yield call(api.post, 'meetups', meetup);
    toast.success('Meetup cadastrado com sucesso!');

    yield put(createMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados de meetup');
    yield put(createMeetupFailure());
  }
}

export function* getMeetup({ payload }) {
  try {
    const { id } = payload;
    const { data } = yield call(api.get, `/meetup/${id}`);

    yield put(getMeetupSuccess(data));
  } catch (err) {
    yield put(getMeetupFailure());
    toast.error('Erro ao ver detalhes de meetup');
  }
}

export function* editMeetup({ payload }) {
  try {
    // file_id
    const { id } = payload.meetup;
    const { data } = yield call(api.get, `/meetup/${id}`);
    yield put(getMeetupSuccess(data));
    history.push('/meetup');
  } catch (error) {
    yield put(editMeetupFailure());
    toast.error('Erro ao editar o meetup');
  }
}

export default all([
  takeLatest('@meet/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meet/DETAIL_MEETUP_REQUEST', getMeetup),
]);
