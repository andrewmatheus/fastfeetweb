import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  max-width: 1440px;
  max-height: 900px;

  .title {
    font-family: 'Roboto-bold';
    font-size: 24px;
    letter-spacing: 0;
    color: #444444;
    opacity: 1;
    text-align: left;

    margin: 32px 0px 34px 120px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }
`;

export const ListOrders = styled.div`
  table {
    margin-top: 20px;
    width: 1200px;
    background: #fff;
    padding: 30px 30px 0px 30px;

    th {
      text-align: left;
      padding-bottom: 20px;
    }

    tbody tr {
      & + tr {
        td {
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
      }
    }

    td {
      padding-bottom: 15px;
      font-size: 16px;
      color: #666;

      div {
        display: flex;
        justify-content: flex-end;

        a {
          margin-right: 23px;
          color: ${colors.purpleButton};
        }

        button {
          font-size: 16px;
          margin-right: 0;
          background: none;
          border: 0;
          color: ${colors.purpleButton};
        }
      }
    }
  }
`;
