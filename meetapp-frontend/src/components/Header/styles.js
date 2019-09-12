import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  padding: 0 50px;
  border: 0.1 solid #979797;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 660px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    width: 31px;
    height: 32px;
  }

  strong {
    color: #fff;
    font-size: 12px;
  }

  p {
    font-size: 12px;
    color: #999;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #fff;
  }

  button {
    color: #fff;
    width: 52px;
    border: 0;
    height: 30px;
    border-radius: 4px;
    background: #d44059;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
