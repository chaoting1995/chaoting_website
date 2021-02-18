import React from 'react';
import styled from '@emotion/styled';
// import { ReactComponent as HoleMask } from '../../images/hole-mask.svg';
import holeMask from '../../images/hole-mask2.svg';

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
        opacity: 0.6;
        transition: 0.2s;
        & > p {
          opacity: 1;
        }
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
      }
      &:hover > div:nth-of-type(2) {
        background-size: 250%;
        background-position: 50% 20%;
        transition: 0.2s;
        @media only screen and (max-width: 620px) {
          background-size: 270%;
          background-position: 50% 15%;
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
      &:hover > span {
        margin-bottom: -30px;
        transition: 0.2s;
      }
    }
  }
`;

//---------------children component---------------------//

const ProjectBox = (props) => {
  const { headerA, headerB, img } = props;
  return (
    <>
      <ProjectBoxBG img1={img}>
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
  background-image: url(${({ img1 }) => img1});
  background-size: ${({ img1 }) => {
    if (img1 === project3) return '350% !important';
    if (img1 === project5) return '110% !important';
  }};
  background-position: ${({ img1 }) => {
    if (img1 === project3) return '50% 50% !important';
    if (img1 === project5) return '0% 20% !important';
  }};
`;
//--------------------component--------------------------//

const HomeContent4 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project1}
        />
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project2}
        />
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project3}
        />
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project4}
        />
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project5}
        />
        <ProjectBox
          headerA="蛛思輿情分析平台"
          headerB="動態圖表"
          img={project6}
        />
      </section>
    </Wrap>
  );
};
export default HomeContent4;
