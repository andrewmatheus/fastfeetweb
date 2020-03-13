import styled from 'styled-components';
import { darken } from 'polished';
import color from '~/styles/colors';

export const Wrapper = styled.div`
  background: ${color.purpleButton} 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: 448px;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;

  img {
    align-items: center;
    margin-top: 50px;
    max-width: 250px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h1 {
      display: flex;
      margin: 20px 0px 5px 30px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
    }

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      opacity: 1;
      height: 45px;
      padding: 0 15px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #999;
      margin: 0 30px 10px;

      &::placeholder {
        text-align: left;
        letter-spacing: 0;
        color: #999999;
        opacity: 1;
      }
    }

    button {
      margin: 5px 30px 0;
      height: 44px;
      background: #7d40e7 0% 0% no-repeat padding-box;
      border-radius: 4px;
      opacity: 1;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0;
      color: #ffffff;
      opacity: 1;
      border: 0;

      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#7d40e7')};
      }
    }
  }
`;
