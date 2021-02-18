import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

//----------------------style--------------------------//
const Wrap = styled.div`
  position: relative;
  section {
    margin-top: 56px;
    position: relative;
    max-width: 700px;
    &::after {
      content: '';
      height: 100%;
      width: 0;
      border: 1px solid ${theme.primaryColor};
      position: absolute;
      top: 0px;
      left: 6px;
    }
    & > div {
      min-width: 200px;
      margin: 12px 30px 40px 30px;
      ${'' /* background-color: #faf; */}
      padding: 10px;
      border-radius: 10px;
      position: relative;
      transition: 0.2s;
      &:hover {
        box-shadow: 0px 4px 6px 2px rgb(0 0 0 / 20%);
        transition: 0.2s;
      }

      & > div:last-child {
        position: absolute;
        left: -32px;
        top: 39px;
        width: 18px;
        height: 18px;
        border-radius: 50px;
        z-index: 1;
        background-color: ${theme.primaryColor};
      }

      h4 {
        min-width: 50px;
        font-weight: 500;
        font-size: 14px;
        color: ${theme.secondaryColor};
        margin-bottom: 10px;
      }

      h3 {
        position: relative;
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 10px;
        color: ${theme.lightBlack};
      }
      li {
        list-style: none;
      }
      li > h5 {
        font-weight: 600;
        color: ${theme.darkPrimary};
        margin-bottom: 0;
        font-size: 16px;
      }
      li,
      p {
        font-size: 16px;
        font-weight: 400;
        color: ${theme.lightBlack};
        line-height: 1.8rem;
        width: 100%;
        margin-bottom: 1rem;
        letter-spacing: 1px;
      }
    }
  }
`;
//-----------children component:經歷盒子---------------------//

const ExperienceBox = (props) => {
  const { time, header } = props;
  return (
    <>
      <div>
        <h4>{time}</h4>
        <h3>{header}</h3>
        <div>{props.children}</div>
        <div></div>
      </div>
    </>
  );
};
//--------------------component--------------------------//

const HomeContent3 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <ExperienceBox
          time="2020 July. - 2020 Nov."
          header="資策會 - 前端工程師培訓"
        >
          <ul>
            <li>
              <h5>系統化學習前端相關技術</h5>
              填補自學遇到的盲點，加深 JavaScript 基本概念，並學習React 框架。
            </li>
            <li>
              <h5>學習後端，增加前端廣度</h5>
              課程包含 Node.js、PHP、MySQL
              ，透過後端語言實際撰寫商品後台，加深前後端資料傳送的概念及 RESTful
              API 的操作 。
            </li>
            <li>
              <h5>累積專案協作經驗</h5>
              資策會畢業專題，從功能發想及聚焦、網頁風格設計、前端功能，到後端API撰寫、資料庫建置，打造友善用戶的品牌官網，提供用戶流暢的訂餐服務。
            </li>
          </ul>
        </ExperienceBox>
        <ExperienceBox
          time="2017 Jun. - 2020 May."
          header="Lazy House 品牌公寓 - Co-Founder"
        >
          <p>
            1、Business model 建構，制定選屋條件、室內裝潢規畫
            <br />
            2、物件開發、屋主合作商談、合約公證 <br />
            3、拓展三層物件共110 坪、管理 20 位租客與關係維護 <br />
            4、與三位夥伴將創業 idea落地執行，經歷快速成長，現在是穩定營運狀態
          </p>
        </ExperienceBox>
        <ExperienceBox
          time="2013 Jue. - 2018 Aug."
          header="東吳大學 - 社會學系"
        >
          <p>
            參與演說辯論社，享受理性的溝通碰撞。
            <br />
            曾獲中國法辯冠軍、國際華語辯論公開賽及財政部租稅盃亞軍。
          </p>
        </ExperienceBox>
      </section>
    </Wrap>
  );
};
export default HomeContent3;
