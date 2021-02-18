import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { theme } from '../../Style/theme';
//---------------------匯入icon------------------------//
// import { ReactComponent as Logo } from '../../images/logo.svg';

//-----------------------style---------------------------//
const HeaderWrap = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px 2px rgb(0 0 0 / 10%);
  ${'' /* margin-bottom: 40px; */}
  background-color: ${theme.backgroundColor};
  & > div:nth-of-type(1) {
    ${'' /* position: absolute;
    left: 20px; */}
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;

    svg {
      width: 40px;
      height: 40px;
      background-color: ${theme.primaryColor};
    }
    a {
      &,
      &:link,
      &:visited {
        color: ${theme.primaryColor};
        text-decoration: none;
        transition: 0.1s;
      }
      &:hover {
        color: ${theme.darkPrimary};
        transition: 0.1s;
      }
    }
    h1 {
      font-size: 22px;
      font-weight: 600;
      transition: 0.1s;
      padding: 10px;
      letter-spacing: 0.8px;
      cursor: pointer;
      ${'' /* background-color: #faf; */}
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    & > a {
      &,
      &:link,
      &:visited {
        color: ${theme.lightGray};
        text-decoration: none;
        transition: 0.1s;
      }
    }
    a:hover {
      color: ${theme.secondaryColor};
      text-decoration: none;
      transition: 0.1s;
    }
    li {
      font-size: 18px;
      padding: 15px;
      font-weight: 400;
      letter-spacing: 0.6px;
      cursor: pointer;
      transition: 0.1s;
    }
  }

  ${
    '' /* a:hover {
    color: ${theme.secondaryColor};
    text-decoration: none;
    transition: 0.1s;
  } */
  }
`;

//---------------------component------------------------//

const Header = (props) => {
  const { currentPage } = props;
  return (
    <>
      <HeaderWrap>
        <div>
          <svg />
          <a href="#Chaoting">
            <h1>Tim</h1>
          </a>
        </div>
        <ul>
          <a href="#Profile">
            <li>PROFILE</li>
          </a>
          <a href="#Skill">
            <li>SKILL</li>
          </a>
          <a href="#Experience">
            <li>EXPERIENCE</li>
          </a>
          <a href="#Projects">
            <li>PROJECTS</li>
          </a>
          <a href="#Contact">
            <li>CONTACT</li>
          </a>
        </ul>

        {/* <h2
          onClick={() => {
            if (currentPage === 'home') {
              props.history.push('/compare');
            }
            if (currentPage === 'compare') props.history.push('/');
          }}
        >
          {currentPage === 'home' ? '比較表' : '回首頁'}
        </h2> */}
      </HeaderWrap>
    </>
  );
};

export default withRouter(Header);
