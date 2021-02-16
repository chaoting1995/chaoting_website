import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//----------------children component--------------------//
// 大標、副標
import HomeHeader from './HomeHeader';

//----------------------style--------------------------//
const Wrap = styled.div`
  position: relative;
  height: 750px;
  width: 840px;
  background-color: #fff;
  border-radius: 50%;
  margin: 56px auto 0 auto;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & > div {
    margin-top: 200px;
  }
  section {
    margin-top: 40px;
    p {
      margin-bottom: 30px;
    }
  }
`;

//--------------------component--------------------------//

const HomeContent5 = (props) => {
  const { header1, header2 } = props;

  return (
    <Wrap>
      <HomeHeader header1={header1} header2={header2} />
      <section>
        <p>I'm Chaoting 張兆廷</p>
        <p>Welcome to contact with me! </p>
        <p>email : chaoting666@gmail.com</p>
      </section>
    </Wrap>
  );
};
export default HomeContent5;
