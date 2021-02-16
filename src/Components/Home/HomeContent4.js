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
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    & > div {
      background-color: #fff;
      width: 100%;
      height: 320px;
      margin: 0;
      cursor: pointer;
      position: relative;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      border-radius: 15px;
      box-shadow: 0 8px 45px -22px rgb(0 0 0 / 40%);
      border-radius: 15px;
      box-shadow: 0 8px 45px -22px rgb(0 0 0 / 40%);
      svg {
        position: absolute;
        ${'' /* z-index: 0; */}
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        fill-rule: evenodd;
        fill: rgb(255, 255, 255);
        overflow: hidden;
        cursor: pointer;
      }
      & > div {
        background-color: rgb(73, 99, 121);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 5;
        opacity: 0;
        visibility: hidden;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-transition: all 0.2s;
        h6 {
          font-size: 30px;
          font-weight: 400;
          line-height: 1.33;
          letter-spacing: 2px;
          text-align: center;
          color: #fff;
          margin-block-start: 2.33em;
          margin-block-end: 2.33em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          visibility: hidden;
          cursor: pointer;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: 1.2px;
          text-align: center;
        }
        & > div {
          ${'' /* background-image: url(...); */}
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
          z-index: 3;
          position: absolute;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          top: 1px;
          left: 1px;
          background-color: #faf;
        }
        h5 {
          -webkit-transition: all 0.2s;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.17;
          letter-spacing: 1.78px;
          text-align: center;
          color: var(--black-1);
          position: relative;
          z-index: 11;
          padding-top: 81.25%;
          pointer-events: none;
        }
      }
    }
  }
`;
//---------------children component---------------------//

const ProjectBox = (props) => {
  const { header5 } = props;
  return (
    <>
      <div>
        <svg />
        <div>
          <h6>看作品</h6>
          <p>See More</p>
        </div>
        <div>{props.children}</div>
        <h5>{header5}</h5>
      </div>
    </>
  );
};
//--------------------component--------------------------//

const HomeContent4 = (props) => {
  const { header1, header2 } = props;
  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
        <ProjectBox header5="蛛思輿情分析平台 • 動態圖表">ss</ProjectBox>
      </section>
      <div></div>
    </Wrap>
  );
};
export default HomeContent4;
