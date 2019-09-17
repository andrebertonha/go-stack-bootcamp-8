import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 660px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-size: 18px;
      font-weight: normal;
    }
  }

  img {
    width: 660px;
    height: 220px;
    margin-top: 50px;
  }

  span {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    margin-top: 5px;
  }
`;

export const Time = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 660px;
  height: 54px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background: linear-gradient(-90deg, #2d2335, #564464);
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: #999;
    font-size: 14px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #999;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: none;
`;

export const EditButton = styled.button`
  background: #4dbaf9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 15px;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;
  height: 36px;
  &:hover {
    background: ${darken(0.05, '#4dbaf9')};
  }
  svg {
    margin-right: 5px;
  }
  span {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const CancelButton = styled.button`
  background: #d44059;
  display: flex;
  align-items: center;
  padding: 11px 15px;
  margin-left: 10px;
  height: 36px;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.05, '#F94D6A')};
  }
  svg {
    margin-right: 5px;
  }
  span {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 0;
  }
`;
