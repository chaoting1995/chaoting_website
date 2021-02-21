import React from 'react';
import styled from '@emotion/styled';
// import { ReactComponent as HoleMask } from '../../images/hole-mask.svg';
import holeMask from '../../images/hole-mask3.svg';

import project1 from '../../images/project-foodGo.png';
import project2 from '../../images/project-bibiWeb.png';
import project3 from '../../images/project-weatherApp.png';
import project4 from '../../images/project-BMIConverter.png';
import project5 from '../../images/project-catPush.png';
import project6 from '../../images/project-todoApp.png';

import { theme } from '../../Style/theme';

//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

//----------------------style--------------------------//
const Wrap = styled.div`
  position: relative;
  section {
    margin-top: 56px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    transition: 0.5s;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      transition: 0.5s;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 20px;
      grid-gap: 10px;
      grid-row-gap: 28px;
      transition: 0.5s;
    }

    ${'' /* Skill Box */}
    & > div {
      position: relative;
      background-color: ${theme.primaryColor};
      width: 100%;
      height: 320px;
      margin: 0;
      cursor: pointer;
      border-radius: 15px;
      box-shadow: 0 8px 45px -22px rgb(0 0 0 / 40%);
      overflow: hidden;

      background-repeat: no-repeat;
      background-size: cover;
      ${'' /* background-size: 110%; */}
      background-position: 50% 0%;

      display: flex;
      align-items: flex-end;
      justify-content: center;
      @media only screen and (max-width: 620px) {
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        span:nth-of-type(1) {
          margin-bottom: 10px;
        }
        span:nth-of-type(2) {
          display: none;
        }
      }
      ${'' /* Box Opacity Mask */}
      & > div:nth-of-type(1) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.primaryColor};
        opacity: 0;
        transition: 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > p:nth-of-type(1) {
          font-size: 30px;
          font-weight: 400;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 10px;
        }
        & > p:nth-of-type(2) {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #fff;
        }
      }
      &:hover > div:nth-of-type(1) {
        opacity: 0.7;
        transition: 0.2s;
      }

      ${'' /* Box Hole Mask */}
      & > div:nth-of-type(2) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        ${'' /* height: 320px; */}
        height: 100%;
        background-image: url(${holeMask});
        background-repeat: no-repeat;
        ${'' /* background-size: cover; */}
        background-size: 110%;
        background-position: 50% 0%;
        transition: 0.2s;
        @media only screen and (max-width: 550px) {
          transition: 0.2s;
          display: none;
          & ~ span {
            padding: 5px;
            margin-bottom: 0px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.8);
          }
        }
      }
      &:hover > div:nth-of-type(2) {
        background-size: 250%;
        background-position: 50% 10%;
        transition: 0.2s;
        @media only screen and (max-width: 620px) {
          background-size: 340%;
          background-position: 50% 10%;
          transition: 0.2s;
        }
        @media only screen and (max-width: 360px) {
          background-size: 370%;
          background-position: 50% 10%;
          transition: 0.2s;
        }
      }
      span {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.78px;
        margin-bottom: 25px;
        ${'' /* margin-bottom: 40px; */}
        z-index: 2;
        pointer-events: none;
        transition: 0.2s;
      }
      span:nth-of-type(2) {
        padding: 0 5px;
      }
      &:hover > span {
        margin-bottom: -30px;
        transition: 0.2s;
      }
    }
  }
`;

//---------------children component---------------------//

const ProjectBox = (props) => {
  const { headerA, headerB, img, url } = props;
  return (
    <>
      <ProjectBoxBG
        img1={img}
        onClick={() => {
          // window.location.href = url;
          window.open(url, '_blank');
        }}
      >
        <div>
          <p>看作品</p>
          <p>See Proj</p>
        </div>
        <div></div>
        <span>{headerA}</span>
        <span> • </span>
        <span>{headerB}</span>
      </ProjectBoxBG>
    </>
  );
};

const ProjectBoxBG = styled.div`
  ${'' /* 作品圖片微調 */}
  background-image: url(${({ img1 }) => img1});
  background-size: ${({ img1 }) => {
    if (img1 === project3) return '350% !important';
    if (img1 === project5) return '110% !important';
  }};
  background-position: ${({ img1 }) => {
    if (img1 === project3) return '50% 50% !important';
    if (img1 === project5) return '0% 20% !important';
  }};
  ${'' /* 背景顏色 */}
  background-color: ${({ img1 }) => {
    if (img1 === project1) return '#f5a016 !important';
    if (img1 === project2) return '#507199 !important';
    if (img1 === project3) return '#C8DAE6 !important';
    if (img1 === project4) return '#dcc200 !important';
    if (img1 === project5) return `lightgray !important`;
    if (img1 === project6) return '#f48145 !important';
  }};
  ${'' /* 遮罩顏色 */}
  & > div:nth-of-type(1) {
    background-color: ${({ img1 }) => {
      if (img1 === project1) return '#f5a016 !important';
      if (img1 === project2) return '#507199 !important';
      if (img1 === project3) return '#C8DAE6 !important';
      if (img1 === project4) return '#dcc200 !important';
      if (img1 === project5) return '#f48145 !important';
      if (img1 === project6) return 'gray !important';
    }};
  }
`;
//--------------------component--------------------------//

const HomeContent4 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <ProjectBox
          headerA="拾餐 FoodGo"
          headerB="品牌官網"
          img={project1}
          url="https://www.youtube.com/watch?v=aZHW-grHMfU"
        />
        <ProjectBox
          headerA="電腦比比 Bibi Web"
          headerB="比價網站"
          img={project2}
          url="https://chaoting1995.github.io/bibi_web/"
        />
        <ProjectBox
          headerA="台灣天氣觀測/預報"
          headerB="天氣盒子"
          img={project3}
          url="https://chaoting1995.github.io/weather_app/"
        />
        <ProjectBox
          headerA="BMI 換算器"
          headerB="換算工具"
          img={project4}
          url="https://chaoting1995.github.io/bmi_converter_pwa/"
        />
        <ProjectBox
          headerA="喵皇推推Cat-Push"
          headerB="小遊戲"
          img={project5}
          url="https://chaoting1995.github.io/Jquery-practice/0921-%E7%B7%B4%E7%BF%92-%E8%B2%93%E5%92%AApush.html"
        />
        <ProjectBox
          headerA="Todo-list App"
          headerB="代辦事項"
          img={project6}
          url="https://github.com/chaoting1995/todo_app"
        />
      </section>
    </Wrap>
  );
};
export default HomeContent4;
