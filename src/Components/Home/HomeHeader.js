import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------------style--------------------------//
const Wrap = styled.div`
  h1 {
    display: inline-block;
    margin: 0 10px 0 0;
    color: ${theme.header1Color};
    font-size: ${theme.header1Size};
    font-weight: 600;
    letter-spacing: 1px;
  }
  h2 {
    display: inline-block;
    margin: 12px 0 0 0;
    color: ${theme.header2Color};
    font-size: ${theme.header2Size};
    font-weight: 700;
    line-height: 1.67;
    letter-spacing: 0.82px;
  }
`;
const HomeHeader = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <h1>{header1}</h1>
      <h2>{header2}</h2>
    </Wrap>
  );
};
export default HomeHeader;
