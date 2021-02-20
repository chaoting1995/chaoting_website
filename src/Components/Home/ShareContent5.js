import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';
import { ReactComponent as CakeResume } from '../../images/Contact-cakeresume.svg';
import { ReactComponent as Github } from '../../images/Contact-github.svg';
import { ReactComponent as Mail } from '../../images/Contact-mail.svg';
//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

//----------------------style--------------------------//
const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 750px;
  ${'' /* margin-bottom: 60px; */}
  ${'' /* background-color: #faf; */}
  & > div {
    position: absolute;
    z-index: 1;
    top: 0;
    left: calc(50% - 420px);
    height: 750px;
    width: 840px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 auto;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (max-width: 470px) {
      left: -200px;
      transition: 0.2s;
    }
    & > div {
      margin-top: 180px;
    }
    section {
      margin: 40px 0 0 10px;
      svg {
        width: 20px;
        fill: ${theme.primaryColor};
        margin-right: 15px;
      }
      p {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 500;
        color: ${theme.primaryColor};
        display: flex;
        align-items: center;
        a {
          &,
          &:link,
          &:visited,
          &:active {
            color: ${theme.primaryColor};
            text-decoration: none;
            transition: 0.1s;
            display: flex;
            align-items: center;
          }
          &:hover {
            color: ${theme.darkPrimary};
            transition: 0.1s;
          }
        }
      }
    }
  }
`;

//--------------------component--------------------------//

const HomeContent5 = (props) => {
  const { header1, header2 } = props;

  return (
    <Wrap>
      <div>
        <HomeHeader header1={header1} header2={header2} />
        <section>
          <p>I'm Tim 張兆廷</p>
          <p>Welcome to contact with me! </p>

          <p>
            <Mail />
            <span>chaoting666@gmail.com</span>
          </p>

          <p>
            <a href="https://github.com/chaoting1995">
              <Github />
              <span>https://github.com/chaoting1995</span>
            </a>
          </p>
          <p>
            <a href="https://www.cakeresume.com/s--KYRKWVqjhLf2S5xQBCA8sA--/chaoting13">
              <CakeResume />
              <span>https://reurl.cc/E2o1OA</span>
              <span>（ CakeResume ）</span>
            </a>
          </p>
        </section>
      </div>
    </Wrap>
  );
};
export default HomeContent5;
