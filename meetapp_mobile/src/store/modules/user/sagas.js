import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {email, oldPassword, password, confirmPassword} = payload.data;

    // Object.assign
    const profile = {
      email,
      oldPassword,
      password,
      confirmPassword,
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve erro na atualização do perfil, verique seus dados',
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);