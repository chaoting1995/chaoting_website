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
import tangleCat from '../../images/tangle-cat.png';

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
      margin: 10px 0 20px 0;
      color: ${theme.darkGray};
      font-size: ${theme.paragraphSize};
      font-weight: 500;
      line-height: 1.38;
      letter-spacing: 0.8px;
      max-width: 450px;
      white-space: pre-wrap;
    }
  }
  & > div:last-child > img {
    ${'' /* background-color: ${theme.primaryColor}; */}
    user-select: none;
    position: absolute;
    z-index: 1;
    top: 300px;
    right: 30px;
    width: 380px;
    ${'' /* height: 390px; */}
  }
  @media only screen and (max-width: 1100px) {
    & > div:last-child {
      display: none;
    }
  }
  ${'' /* 探戈貓跳一下 */}
  &:hover > div:last-child > img {
    animation: ani 0.5s;
    @keyframes ani {
      0% {
        top: 300px;
      }
      50% {
        top: 250px;
      }
      100% {
        top: 300px;
      }
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
          <p>
            好的協作始於順暢溝通。參與辯論活動，養成我有理有據、就事論事的做事風格，遇到與我觀點不同的人，我也樂於耐心溝通，圓融應對。
          </p>
        </div>
        <div>
          <Think />
          <h3>歸納分析</h3>
          <p>
            Work hard, work smart!
            我喜歡將工作流程化，避免每次費心思考做法。熱衷於掌握工作流程中的每一步細節，時時思考更效率的做法、更簡化的方案。
          </p>
        </div>
        <div>
          <Study />
          <h3>熱愛學習</h3>
          <p>
            大四經營品牌公寓，從中學習與人協作、實現商業構想的經驗。而後投入網頁開發，學習前端技術。因此有別一般技術人才，我能跨領域結合前端開發經驗，及不動產相關涉略。
          </p>
        </div>
        <div>
          <Race />
          <h3>勇於競爭</h3>
          <p>
            不論是辯論競賽、創業挑戰，抑或是從無到有學習前端開發技術，我都能不畏挑戰、爭取勝出。
          </p>
        </div>
      </section>
      <div>
        <img src={tangleCat} alt="" />
      </div>
    </Wrap>
  );
};
export default HomeContent1;
