import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

import { ReactComponent as Commu } from '../../images/profile-communicate.svg';
import { ReactComponent as Think } from '../../images/profile-think.svg';
import { ReactComponent as Study } from '../../images/profile-study.svg';
import { ReactComponent as Race } from '../../images/profile-race.svg';

//----------------------style--------------------------//
const Wrap = styled.div`
  position: relative;

  section {
    & > div {
      margin-top: 56px;
      position: relative;
      padding-left: 75px;
    }
    & > div > svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;
      fill: ${theme.darkPrimary};
      ${'' /* background-color: ${theme.primaryColor}; */}
    }
    h3 {
      margin: 10px 0 0 0;
      color: ${theme.darkPrimary};
      font-size: ${theme.header3Size};
      font-weight: 500;
      line-height: 1.43;
      letter-spacing: 0.4px;
    }
    p {
      display: inline-block;
      margin: 10px 0 0 0;
      color: ${theme.darkGray};
      font-size: ${theme.paragraphSize};
      font-weight: 500;
      line-height: 1.38;
      letter-spacing: 0.8px;
      width: 360px;
      white-space: pre-wrap;
    }
  }
  & > div:last-child {
    background-color: ${theme.primaryColor};
    user-select: none;
    position: absolute;
    z-index: 1;
    top: 255px;
    right: 0px;
    width: 480px;
    height: 390px;
  }
  @media (max-width: 1100px) {
    & > div:last-child {
      display: none;
    }
  }
`;

//--------------------component--------------------------//

const HomeContent1 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <div>
          <Commu />
          <h3>人際溝通</h3>
          <p>山葵組設計的客製化網站不只好看，還很好用、好玩、好動感！</p>
        </div>
        <div>
          <Think />
          <h3>歸納分析</h3>
          <p>山葵組設計的客製化網站不只好看，還很好用、好玩、好動感！</p>
        </div>
        <div>
          <Study />
          <h3>熱愛學習</h3>
          <p>山葵組設計的客製化網站不只好看，還很好用、好玩、好動感！</p>
        </div>
        <div>
          <Race />
          <h3>勇於競爭</h3>
          <p>山葵組設計的客製化網站不只好看，還很好用、好玩、好動感！</p>
        </div>
      </section>
      <div></div>
    </Wrap>
  );
};
export default HomeContent1;
