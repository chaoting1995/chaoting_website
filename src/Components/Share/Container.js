import React from 'react';
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  max-width: 1070px;
  ${'' /* height: 700px; */}
  margin: 0 auto;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-color: #faf;
`;
//包Header、Wrap
const Container = (props) => {
  return (
    <>
      <ContainerWrap>
        {props.children}
        {/* <img src={haedImage} alt="s"></img> */}
      </ContainerWrap>
      ;
    </>
  );
};
export default Container;
