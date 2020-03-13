import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 120px;

  height: 36px;
  width: 142px;
  padding: 0 10px;

  background: ${colors.purpleButton} 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  text-align: center;
  font-family: 'Roboto-Bold';
  font-size: 14px;

  letter-spacing: 0;
  color: ${colors.white};
  opacity: 1;

  .addOrder {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.2, colors.purpleButton)};
  }
`;
