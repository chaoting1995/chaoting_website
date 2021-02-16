import React, { useState, useEffect, useCallback } from 'react';
//  樣式重置
import 'normalize.css';
//  制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from '@emotion/styled';
//--------------------所有頁面共用元件-----------------------//
//頁首
import Header from './Components/Share/Header';
//設定頁面寬度
import Container from './Components/Share/Container';

//頁面切換時，要用捲軸讓頁面回到最上方
import ScrollToTop from './Components/Share/ScrollToTop';
//置頂鍵
import ToTopButton from './Components/Share/ToTopButton';

//--------------------個別頁面元件-----------------------//
import HomePage from './Pages/HomePage';

//--------------------匯入子元件-----------------------//

import HomeContent4 from './Components/Home/HomeContent4';
import HomeContent5 from './Components/Home/HomeContent5';

// //-------------------------GA---------------------------//
// // GA
// import ReactGA from 'react-ga';
// // 讓GA能讀取react-router
// // import withTracker from './utils/withTracker';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
// history.listen((location) => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

//--------------------子元件-----------------------//
const Row2 = styled.div`
  margin-bottom: 160px;
`;

//--------------------Component-----------------------//
function App() {
  //當前頁面
  const [currentPage, setCurrentPage] = useState('Home');

  //-------------------------GA---------------------------//

  // // 初始化
  // useEffect(() => {
  //   ReactGA.initialize('UA-180233172-1');
  //   // ReactGA.set({ page: location.pathname });
  //   // ReactGA.pageview(window.location.pathname);
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  //----------localStorage:一掛載，就取得比較清單---------------//

  //------------------------handle-------------------------//

  //--------------------JSX-----------------------//
  return (
    //--------------------路由表-----------------------//

    // <Router>元件一定要放在最外層
    // <Router basename={process.env.PUBLIC_URL}>
    // <Router history={history} basename={process.env.PUBLIC_URL}>
    <Router basename={process.env.PUBLIC_URL}>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Header currentPage={currentPage} />

        {/* 放切頁時不重新渲染的部份 e*/}
        {/* 路由設定開始 */}

        <ScrollToTop>
          <ToTopButton />

          <Switch>
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/">
              <HomePage setCurrentPage={setCurrentPage} />
            </Route>
            <Route exact path="/project"></Route>
            <Route exact path="/test">
              {/* <ProductList /> */}
            </Route>
          </Switch>
        </ScrollToTop>
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        <Container>
          <Row2>
            <HomeContent4 header1="作品集" header2="Projects"></HomeContent4>
          </Row2>
          <Row2>
            <HomeContent5 header1="聯絡兆廷" header2="Contact"></HomeContent5>
          </Row2>
        </Container>
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
