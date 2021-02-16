import React from 'react';
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  max-width: 1040px;
  ${'' /* height: 700px; */}
  margin: 0 auto;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  ${'' /* background-color: #fff; */}
`;
// 界定網頁內容寬度
const Container = (props) => {
  return (
    <>
      <ContainerWrap>{props.children}</ContainerWrap>;
    </>
  );
};
export default Container;
