import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'user', {
      name,
      email,
      password,
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
    throw err;
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  console.tron.log('token', token);

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
