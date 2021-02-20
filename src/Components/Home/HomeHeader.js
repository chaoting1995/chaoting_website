import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------------style--------------------------//
const Wrap = styled.div`
  h1 {
    display: inline-block;
    margin: 10px 0 0 0;
    color: ${theme.lightBlack};
    font-size: ${theme.header1Size};
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.5s;
    @media only screen and (max-width: 767px) {
      font-size: 45px;
      letter-spacing: 0.39px;
      padding: 0 10px;
      transition: 0.5s;
    }
  }
  h2 {
    margin: 0 10px;
    color: ${theme.secondaryColor};
    font-size: ${theme.header2Size};
    font-weight: 700;
    line-height: 1.67;
    letter-spacing: 0.82px;
    display: flex;
    align-items: center;
    div {
      width: 7px;
      height: 7px;
      border-radius: 10px;
      margin: 0 7px;
      display: inline-block;
      background-color: ${theme.secondaryColor};
    }
  }
  ${'' /* 標題微動畫，暫時方案 */}
  transition: 0.5s;
  &:hover h2 > div {
    animation: ani 0.5s 1;
    @keyframes ani {
      0% {
        margin-bottom: 0px;
      }
      25% {
        margin-bottom: 15px;
      }
      75% {
        margin-bottom: -15px;
      }
      100% {
        margin-bottom: 0px;
      }
    }
  }
`;
//----------------------style--------------------------//

const HomeHeader = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <h2>
        <div />
        {header2}
        <div />
      </h2>
      <h1>{header1}</h1>
    </Wrap>
  );
};
export default HomeHeader;
