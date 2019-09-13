import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 660px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input#attach {
      width: 660px;
      height: 220px;

    }

    span {
      color: #f66f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      background-color: rgba(0, 0, 0, 0.1);
      height: 175px;
      border: 0;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      border-radius: 4px;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input#date {
      font-size: 14px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      width: 120px;
      height: 32px;
      background: #f66f91;
      font-weight: normal;
      font-size: 14px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      align-self: flex-end;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f66f91')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
