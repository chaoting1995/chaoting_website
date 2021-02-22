import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';
import { theme } from '../../Style/theme';

//---------------------匯入icon------------------------//
import { ReactComponent as Logo } from '../../images/logo.svg';
//---------------------匯入子元件------------------------//
import HeaderDrawer from './HeaderDrawer';

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
    cursor: pointer;
    transition: 0.1s;
    svg {
      width: 40px;
      height: 40px;
      .logo1 {
        fill: ${theme.logoColor};
      }
      .logo2 {
        fill: ${theme.selectionColors};
      }
    }
    a {
      &,
      &:link,
      &:visited {
        color: ${theme.darkPrimary};
        text-decoration: none;
        transition: 0.1s;
      }
      ${
        '' /* &:hover {
        color: ${theme.primaryColor};
        transition: 0.1s;
      } */
      }
    }
    h1 {
      font-size: 22px;
      font-weight: 600;
      transition: 0.1s;
      padding: 10px;
      letter-spacing: 0.8px;
      cursor: pointer;
      color: ${theme.darkPrimary};
      ${'' /* background-color: #faf; */};
    }
    &:hover .logo1,
    &:hover h1 {
      fill: ${theme.primaryColor};
      color: ${theme.primaryColor};
      transition: 0.1s;
    }
  }
  ${'' /* navbar各項目 */}
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-right: -20px;
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
      padding: 15px;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.6px;
      cursor: pointer;
      transition: 0.1s;
    }
  }
  & > button {
    display: none;
    color: ${theme.lightGray};
    font-size: 25px;
    margin-right: -20px;
  }
  @media only screen and (max-width: 700px) {
    ul {
      display: none;
    }
    & > button {
      display: block;
    }
  }
`;

// const scrollToAnchor = (anchorName) => {
//   if (anchorName) {
//     // 找到錨點
//     let anchorElement = document.getElementById('Chaoting');
//     // 如果對應id的錨點存在，就跳轉到錨點
//     if (anchorElement) {
//       anchorElement.scrollIntoView();
//     }
//   }
// };

//---------------------component------------------------//

const Header = (props) => {
  //---------------------state & props------------------------//
  // eslint-disable-next-line
  const { currentPage } = props;
  //---------------------handle------------------------//

  //---------------------JSX------------------------//

  return (
    <>
      <HeaderWrap>
        <div>
          <a href="#Chaoting">
            <Logo />
          </a>
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
        <HeaderDrawer />
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
