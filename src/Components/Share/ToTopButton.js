import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../Style/theme';
//-------------------匯入svg-----------------------//

import { ReactComponent as TopArrow } from '../../images/TopArrow.svg';

//--------------------style-----------------------//
const ToTopButtonWrap = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 100px;
  right: 25px;
  cursor: pointer;
  background-color: ${theme.primaryColor};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0;
  visibility: ${({ toTop }) => toTop};
  ${'' /* border: none;  */}
  ${'' /* opacity: 0.7; */}
    ${'' /* outline: none; */}
  line-height:60px;
  text-align: center;
  transition: 0.3s;
  z-index: 999;
  ${'' /* &:hover {
    opacity: 1;
  } */} svg {
    width: 37px;
    margin-right: 1px;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
//--------------------component-----------------------//

function ToTopButton(props) {
  const [toTop, setToTop] = useState('hidden');
  //--------------------handle----------------------//
  // 監聽
  window.addEventListener('scroll', () => {
    handleAppearToTopButton();
  });
  // 動態fixed
  const handleAppearToTopButton = useCallback((position = 'absolute') => {
    // let toTopButton = document.querySelector('.toTopButton');
    // 產品列表頁，沒有「.toTopButton元素」，加「 && toTopButton」才不會出錯
    if (window.pageYOffset >= 4200) {
      setToTop('visible');
    } else if (window.pageYOffset < 4200) {
      setToTop('hidden');
    }
  }, []);

  // 置頂用
  // function scrollToTop() {
  //   let A = setInterval(scrollStep, 6);
  //   function scrollStep() {
  //     if (window.pageYOffset === 0) {
  //       clearInterval(A);
  //     }
  //     window.scroll(0, window.pageYOffset - 50);
  //   }
  // }

  // 置頂用

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到錨點
      let anchorElement = document.getElementById(anchorName);
      // 如果對應id的錨點存在，就跳轉到錨點
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };
  //--------------------JSX-----------------------//

  return (
    <>
      <a href="#Chaoting">
        <ToTopButtonWrap
          toTop={toTop}
          onClick={() => {
            // scrollToTop();
            scrollToAnchor('Chaoting');
          }}
        >
          <TopArrow />
        </ToTopButtonWrap>
      </a>
    </>
  );
}

export default ToTopButton;
