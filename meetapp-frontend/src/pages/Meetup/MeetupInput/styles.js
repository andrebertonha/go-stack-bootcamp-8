import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  align-self: center;
  margin-bottom: 30px;
`;

export const MeetupContainer = styled.label`
  &:hover {
    opacity: 0.7;
  }
  img {
    height: 300px;
    min-width: 100%;
  }
  div {
    background: rgba(0, 0, 0, 0.1);
    height: 150px;
    min-width: 100%;
    display: ${props => (props.src ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    span {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }
  input {
    display: block;
  }
`;
