import React, {useEffect, useState, useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Backgroud from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

import {Container, List} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Backgroud>
      <Header />
      <Container>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Meetup data={item} />}
        />
      </Container>
    </Backgroud>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

// local-offer
