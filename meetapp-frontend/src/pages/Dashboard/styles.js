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

    a {
      width: 120px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: 0;
      border-radius: 4px;
      background: #d44059;
    }

    strong {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-size: 18px;
      font-weight: normal;
    }
  }

  ul {
    display: column;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;

    button {
      width: 40px;
      height: 40px;
      align-self: flex-end;
      align-items: center;
      justify-content: center;
      background: #564464;
      margin: 5px 0 0;
      padding: 11px 25px;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.08, '#564464')};
      }
      svg {
        margin-right: 5px;
      }
      span {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 0;
      }
    }
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
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
