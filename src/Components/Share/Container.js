import React from 'react';
import styled from '@emotion/styled';

const ContainerWrap = styled.div`
  max-width: 1040px;
  ${'' /* min-width: 500px; */}
  ${'' /* height: 700px; */}
  margin: 0 auto;
  padding: 0 10px;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  ${'' /* background-color: #fff; */}
  @media (max-width: 1100px) {
    max-width: 700px;
  }
`;
// 界定網頁內容寬度
const Container = (props) => <ContainerWrap>{props.children}</ContainerWrap>;

export default Container;
