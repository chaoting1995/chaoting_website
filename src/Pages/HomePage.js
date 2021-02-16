import React, { useState, useEffect, useCallback } from 'react';
//-------------------匯入樣式套件-----------------------//
import styled from '@emotion/styled';
//設定頁面寬度
import Container from '../Components/Share/Container';
//--------------------匯入子元件-----------------------//
// 封面
import HomeCover from '../Components/Home/HomeCover';
import HomeContent1 from '../Components/Home/HomeContent1';
import HomeContent2 from '../Components/Home/HomeContent2';
import HomeContent3 from '../Components/Home/HomeContent3';

//--------------------style------------------------//
const Row1 = styled.div`
  margin-bottom: 120px;
`;

const Row2 = styled.div`
  margin-bottom: 160px;
`;

//控制商品清單的寬度比例
// const Main = styled.main`
//   width: 100%;
// `;

//--------------------component-----------------------//
function HomePage(props) {
  //--------------------state & props-----------------------//
  // 待比較清單、當前頁面
  const { setCurrentPage } = props;

  // //--------------------GA+router--------------------------//
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  //------------------------handle-------------------------//

  //設定「當前頁面」的狀態
  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);

  //--------------------------JSX--------------------------//
  return (
    <>
      {/* <main> */}
      <Row1>
        <HomeCover></HomeCover>
      </Row1>
      <Container>
        <Row2>
          <HomeContent1 header1="核心特質" header2="Profile" />
        </Row2>
        <Row2>
          <HomeContent2 header1="專業技能" header2="Skill"></HomeContent2>
        </Row2>
        <Row2>
          <HomeContent3 header1="過往經歷" header2="Experience"></HomeContent3>
        </Row2>
      </Container>
      {/* </main> */}
    </>
  );
}
// export default withTracker(HomePage);
export default HomePage;
