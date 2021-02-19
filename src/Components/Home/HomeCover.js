import React from 'react';
import styled from '@emotion/styled';

//----------------------img--------------------------//
import codingHand from '../../images/coding-hand.jpg';

//---------------------style-------------------------//

const HomeCoverWrap = styled.div`
  width: 100%;
  ${'' /* height: 700px; */}
  min-width: 350px;
  min-height: 790px;
  ${'' /* height: 790px; */}
  position: relative;
  ${'' /* margin-top: 70px; */}
  background-attachment: fixed;
  background-image: url(${codingHand});
  ${'' /* background-image: url('../../images/coding-hand.jpg'); */}
  background-position: center -20%;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateY(180deg);

  div:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
  div:nth-of-type(2) {
    transform: rotateY(180deg);
    max-width: 55%;
    position: absolute;
    top: 50%;
    right: 10%;
    color: #fff;
    h1 {
      font-size: 40px;
      margin: 0 0 20px 0;
    }

    p {
      color: #dedede;
    }
  }
  ${'' /* @media (max-width: 767px) {
    background-attachment: scroll;
  } */}
`;

const HomeCover = (props) => {
  return (
    <HomeCoverWrap>
      <div></div>
      <div>
        <h1>Hello ! I'm Tim</h1>
        {/* <h1>I'm Tim</h1> */}
        <p>一位前端工程師，熱衷於建構流暢的用戶體驗，勇於嘗試任何新技術。</p>
      </div>
    </HomeCoverWrap>
  );
};
export default HomeCover;
