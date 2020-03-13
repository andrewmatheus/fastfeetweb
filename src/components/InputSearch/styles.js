import styled from 'styled-components';

import colors from '~/styles/colors';

export const Input = styled.div`
  display: flex;
  height: 36px;
  width: 237px;

  background: ${colors.white} 0% 0% no-repeat padding-box;
  border: 1px solid ${colors.grayBorder};
  border-radius: 4px;
  opacity: 1;

  margin: 0px 0px 16px 120px;

  .iconSearch {
    margin: 9px;
  }

  .inputSearch {
    border: 0px;
    font-family: 'Roboto-Regular';
    font-size: 14px;
    color: ${colors.grayPlaceholder};
  }
`;
