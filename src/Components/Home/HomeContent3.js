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
    .experience {
      position: relative;
      margin-bottom: 1rem;
    }

    .experience::after {
      content: '';
      position: absolute;
      height: 85%;
      width: 0;
      border: 1px solid #22aed1;
      top: 0px;
      left: 6px;
    }

    .time {
      position: relative;
      min-width: 5rem;
    }

    .time h4 {
      font-weight: 400;
      font-size: 14px;
      color: #22aed1;
      margin: 0 0 0 2rem;
    }

    .time h4::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid #22aed1;
      border-radius: 50%;
      /* left: -1rem; */
      left: 0rem;
      top: 4px;
      z-index: 1;
      background-color: #22aed1;
    }

    .card-item {
      /* max-width: 600px; */
      min-width: 200px;
      /* padding: 10px; */
      /* background-color: #d8dbe2; */
      margin: 1.2rem 2rem 3rem;
    }

    .card-item h3 {
      font-size: 20px;
      font-weight: 500;
      margin: 0 0 5px 0;
      color: #373f51;
    }

    .card-item li,
    .card-item p {
      font-size: 16px;
      font-weight: 400;
      color: #373f51;
      line-height: 1.8rem;
      width: 100%;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }
    .card-item .exp-sm-title {
      font-weight: 500;
      color: #4787bb;
      margin-bottom: 0;
    }

    /* .autobi {
  height: 100%;
  margin-bottom: 2rem;
} */
  }
`;

//--------------------component--------------------------//

const HomeContent3 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <div class="row">
          <div class="experience col-12">
            <div class="time">
              <h4>2020 July - 2020 Nov.</h4>
            </div>
            <div class="card-item">
              <h3>資策會前端工程師訓練</h3>
              <ul>
                <li>
                  <p class="exp-sm-title">系統化學習前端專業知識</p>
                  填補自學遇到的盲點，加深ＪＳ基本概念，並學習React 框架。
                </li>
                <li>
                  <p class="exp-sm-title">學習後端增加前端廣度</p>
                  課程包含Node.js、
                  PHP，透過後端語言實際撰寫商品後台，加深前後端資料傳送的概念及Restful
                  API的操作 。
                </li>
                <li>
                  <p class="exp-sm-title">
                    參與Posdcast電商平台網站製作，負責商品頁面及網站風格
                  </p>
                  資策會畢業專題，從功能發想及聚焦、網頁風格設計、前端功能及互動到後端資料庫，打造方便收聽的Podcast平台，同時提供播客添購錄音設備及周邊商邊的販賣。
                </li>
              </ul>
            </div>
            <div class="time">
              <h4>2019 Mar. - 2020 May</h4>
            </div>
            <div class="card-item">
              <h3>Lazy House 品牌公寓</h3>
              <p>
                一年會計經驗，了解業界工作環境後，比起累積年資更想從培養專業能力中獲得成就感。
                利用下班時間，自學HTML/CSS等程式語言，意外覺得有趣，想更進一步的學習。
              </p>
            </div>
            <div class="time">
              <h4>2014 Jue. - 2018 Sep.</h4>
            </div>
            <div class="card-item">
              <h3>東吳大學社會學系</h3>
              <p>
                參加社團，招生、活動宣傳，學習使用 Illustrator / Photoshop
                等工具。
                <br />
                對於網頁及UI/UX設計有興趣，在網路自學相關知識。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrap>
  );
};
export default HomeContent3;
