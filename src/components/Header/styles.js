import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.grayBorder};
  opacity: 1;
  padding: 0 30px;
  margin: 0;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    padding: 5px;

    img {
      background: transparent 0% 0% no-repeat padding-box;
      opacity: 1;
    }

    span {
      padding-top: 40px;
      background: ${colors.grayBorder};
      border: 0.7px solid ${colors.grayBorder};
      box-sizing: border-box;
      margin: 15px 30px 15px;
    }

    a {
      font-weight: bold;
      padding-right: 12px;
      font-family: 'Roboto';
      font-size: 15px;
      color: ${colors.grayPlaceholder};
      text-align: left;
      letter-spacing: 0;
      opacity: 1;

      transition: color 0.2s;

      &:hover {
        color: ${darken(0.04, `${colors.grayPlaceholder}`)};
      }
    }
  }

  aside {
    align-items: center;
    h1 {
      font-family: 'Roboto-bold';
      font-size: 14px;
      letter-spacing: 0;
      color: ${colors.grayAside};
      opacity: 1;
      text-align: left;
    }

    a {
      font-family: 'Roboto-Regular';
      font-size: 14px;
      text-align: right;
      letter-spacing: 0;
      color: ${colors.redSignOut};
      opacity: 1;

      transition: color 0.2s;

      &:hover {
        color: ${darken(0.1, `${colors.redSignOut}`)};
      }
    }
  }
`;
