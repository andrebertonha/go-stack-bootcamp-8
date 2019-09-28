import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Backgroud from '~/components/Background';
// import { Container } from './styles';

export default function Dashboard() {
  return <Backgroud />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
