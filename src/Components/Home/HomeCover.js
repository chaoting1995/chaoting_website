import React from 'react';
import styled from '@emotion/styled';

//----------------------img--------------------------//
import codingHand from '../../images/coding-hand.jpg';

//---------------------style-------------------------//

const HomeCoverWrap = styled.div`
  width: 100%;
  ${'' /* height: 700px; */}
  min-width: 350px;
  min-height: 700px;
  position: relative;
  background-attachment: fixed;
  background-image: url(${codingHand});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateY(180deg);

  div:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
  div:nth-of-type(2) {
    transform: rotateY(180deg);
    max-width: 50%;
    position: absolute;
    top: 50%;
    right: 10%;
    color: #fff;
    p {
      color: #dedede;
    }
  }
  @media (max-width: 767px) {
    background-attachment: scroll;
  }
`;

const HomeCover = (props) => {
  return (
    <HomeCoverWrap>
      <div></div>
      <div class="header-text">
        <h1>Hello !</h1>
        <h1>I'm Chaoting Chang</h1>
        <p class="caption">
          一名前端工程師，保持開放的心態，擁抱新事物，在學習路上不斷成長，把喜歡的事物做到最好。
        </p>
      </div>
    </HomeCoverWrap>
  );
};
export default HomeCover;
