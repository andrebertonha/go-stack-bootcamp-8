import styled from 'styled-components';

export const Container = styled.div`
  max-width: 660px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 120px;
      height: 30px;
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
