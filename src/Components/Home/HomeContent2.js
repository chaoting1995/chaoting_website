import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

import { ReactComponent as UIIcon } from '../../images/Skill-UI.svg';
import { ReactComponent as JSIcon } from '../../images/Skill-JS.svg';
import { ReactComponent as ReactIcon } from '../../images/Skill-React.svg';
import { ReactComponent as AJAXIcon } from '../../images/Skill-AJAX.svg';
import { ReactComponent as BEIcon } from '../../images/Skill-BE.svg';
import { ReactComponent as OthersIcon } from '../../images/Skill-OtherTools.svg';
//----------------------style--------------------------//
const Wrap = styled.div`
  section {
    position: relative;
    margin-top: 85px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
    transition: 0.5s;

    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 50px;
      transition: 0.5s;
    }
    @media only screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 50px;
      padding: 0 10px;
      transition: 0.5s;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-box-align: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      border-radius: 20px;
      border: 2px solid ${theme.primaryColor};
      padding-bottom: 28px;
      div:nth-of-type(1),
      svg {
        ${'' /* background-color: ${theme.primaryColor}; */}
        width: 120px;
        margin-top: -25px;
        user-select: none;
      }
      h3 {
        animation-delay: 0.1s;
        animation-duration: 0.5s;
        animation-name: wave;
        animation-direction: alternate;
        color: ${theme.primaryColor};
        font-size: ${theme.header3Size};
        font-weight: 600;
        line-height: 1.43;
        letter-spacing: 0.4px;
        text-align: center;
        margin: 10px 0 15px 0;
      }
      p {
        color: ${theme.lightGray};
        font-size: ${theme.header2Size};
        font-weight: 700;
        line-height: 1.38;
        letter-spacing: 0.8px;
        text-align: center;
      }
    }
    ${'' /* 微調icon大小 */}
    & > div:nth-of-type(1) {
      svg {
        margin-left: -5px;
        width: 130px;
      }
    }
    & > div:nth-of-type(6) {
      svg {
        width: 110px;
      }
    }
  }
`;
//---------------children component---------------------//

const SkillBox = (props) => {
  const { header3 } = props;
  return (
    <>
      <div>
        <div>
          {header3 === 'HTML/CSS' && <UIIcon />}
          {header3 === 'JavaScript' && <JSIcon />}
          {header3 === 'ReactJS' && <ReactIcon />}
          {header3 === 'AJAX' && <AJAXIcon />}
          {header3 === 'Back End' && <BEIcon />}
          {header3 === 'Other Tools' && <OthersIcon />}
        </div>
        <h3>{header3}</h3>
        <div>{props.children}</div>
      </div>
    </>
  );
};
//--------------------component--------------------------//

const HomeContent2 = (props) => {
  const { header1, header2 } = props;
  return (
    <>
      <Wrap>
        <HomeHeader header1={header1} header2={header2} />
        <section>
          <SkillBox header3="HTML/CSS">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Bootstrap4</p>
            <p>Web Layout</p>
            <p>RWD</p>
          </SkillBox>
          <SkillBox header3="JavaScript">
            <p>ES5/ES6+</p>
            <p>jQuery</p>
            <p>CSS in JS</p>
          </SkillBox>
          <SkillBox header3="ReactJS">
            <p>React Hook</p>
            <p>React Router</p>
            <p>React Redux</p>
            <p>Material-UI</p>
          </SkillBox>
          <SkillBox header3="AJAX">
            <p>fetch/axios</p>
            <p>HTTP 概念</p>
            <p>RESTful API</p>
            <p>Postman</p>
          </SkillBox>
          <SkillBox header3="Back End">
            <p>Node.js</p>
            <p>Node express</p>
            <p>Node Router</p>
            <p>PHP</p>
            <p>MySQL</p>
          </SkillBox>
          <SkillBox header3="Other Tools">
            <p>VS Code</p>
            <p>Git/Github</p>
            <p>npm/yarn</p>
            <p>DevTool</p>
            <p>Zeplin</p>
          </SkillBox>
        </section>
      </Wrap>
    </>
  );
};
export default HomeContent2;
