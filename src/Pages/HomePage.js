import React, { useState, useEffect, useCallback } from 'react';
//-------------------匯入樣式套件-----------------------//
import styled from '@emotion/styled';
//設定頁面寬度
import Container from '../Components/Share/Container';
//--------------------匯入子元件-----------------------//
// 封面
import HomeCover from '../Components/Home/HomeCover';

//--------------------style------------------------//

const Row1 = styled.div`
  width: 100%
  height: 140px;
  margin-bottom: 40px;
`;

const Row3 = styled.div``;

//包Main、Aside
const Row2 = styled.div`
    display: flex;｀
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
      <HomeCover></HomeCover>
      <Container>
        <Row1></Row1>
        <Row2></Row2>
        <Row3></Row3>
      </Container>
      {/* </main> */}
    </>
  );
}
// export default withTracker(HomePage);
export default HomePage;
