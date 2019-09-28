import React from 'react';

import MeetupDetails from './MeetupDetails';

import {
  Container,
  Info,
  Banner,
  Title,
  Subscription,
  SubscriptionText,
  InfoContainer,
} from './styles';

export default function Meetup() {
  return (
    <Container>
      <Banner source={{uri: 'https://api.adorable.io/avatar/200/andre.png'}} />
      <InfoContainer>
        <Info>
          <Title>Meetup NodeJS</Title>
          <MeetupDetails icon="event" text="24 jun as 08h" />
          <MeetupDetails icon="place" text="Rua Gemballa n80" />
          <MeetupDetails icon="person" text="Organizador" />
        </Info>
        <Subscription onPress={() => {}}>
          <SubscriptionText>Realizar Inscrição</SubscriptionText>
        </Subscription>
      </InfoContainer>
    </Container>
  );
}
