import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const InfoContainer = styled.View`
  padding: 15px 20px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

export const Banner = styled.Image`
  align-self: stretch;
  height: 180px;
`;

export const Data = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex-direction: row;
  align-items: center;
  color: #999;
  font-size: 16px;
  font-weight: normal;
`;

export const Local = styled.Text`
  font-weight: normal;
  font-size: 16px;
  color: #999;
`;

export const Organizador = styled.Text`
  font-weight: normal;
  font-size: 16px;
  color: #999;
`;

export const Subscription = styled(RectButton)`
  height: 46px;
  background: #f94d6a;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SubscriptionText = styled.Text`
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
