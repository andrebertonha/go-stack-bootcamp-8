import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {withNavigationFocus} from 'react-navigation';

import api from '~/services/api';

import Backgroud from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

import {Container, List} from './styles';

function Subscriptions() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

  async function cancelSubscription(id) {
    const response = await api.delete(`subscriptions/${id}`);
    setMeetups(
      meetups.map(meetup =>
        meetup.id === id
          ? {
              ...meetup,
            }
          : meetup,
      ),
    );
    Alert.alert('Cancelamento', 'Inscrição cancelada com sucesso!');
  }

  return (
    <Backgroud>
      <Header />
      <Container>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetup
              data={item}
              buttonText="Cancelar Inscrição"
              onPress={() => cancelSubscription(item.id)}
            />
          )}
        />
      </Container>
    </Backgroud>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
