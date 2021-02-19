import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import styled from '@emotion/styled/types/base';

import styled from '@emotion/styled';
import { theme } from '../../Style/theme';

//---------------------style------------------------//

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: theme.backgroundColor,
  },
  fullList: {
    width: 'auto',
  },
});

const ALink = styled.a`
  &,
  &:link,
  &:visited {
    color: ${theme.lightGray};
    text-decoration: none;
    transition: 0.1s;
  }
  &:hover {
    color: ${theme.secondaryColor};
    transition: 0.1s;
  }
  span,
  div,
  button,
  li {
    &,
    &:link,
    &:visited {
      color: ${theme.lightGray};
      text-decoration: none;
      transition: 0.1s;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.6px;
    }
    &:hover {
      color: ${theme.secondaryColor};
      transition: 0.1s;
    }
  }
`;
//---------------------component------------------------//

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [top, setTop] = useState(false);

  //---------------------handle------------------------//
  const IDConverter = (text) => {
    if (text === 'TIM') return '#Chaoting';
    if (text === 'PROFILE') return '#Profile';
    if (text === 'SKILL') return '#Skill';
    if (text === 'EXPERIENCE') return '#Experience';
    if (text === 'PROJECTS') return '#Projects';
    if (text === 'CONTACT') return '#Contact';
  };
  //   //
  //   const scrollToAnchor = (anchorName) => {
  //     if (anchorName) {
  //       // 找到錨點
  //       let anchorElement = document.getElementById('Contact');
  //       console.log('找到錨點');
  //       // 如果對應id的錨點存在，就跳轉到錨點
  //       if (anchorElement) {
  //         anchorElement.scrollIntoView();
  //         console.log('如果對應id的錨點存在，就跳轉到錨點');
  //       }
  //     }
  //     console.log('c');
  //   };
  //
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setTop({ top: open });
  };
  //---------------children component-------------------//
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['TIM', 'SKILL', 'EXPERIENCE', 'PROJECTS', 'CONTACT'].map(
          (text, index) => (
            <ALink href={IDConverter(text)} key={text}>
              <ListItem button>
                <ListItemText primary={text} s />
              </ListItem>
            </ALink>
          )
        )}
      </List>
    </div>
  );

  //---------------------JSX------------------------//
  return (
    <>
      <Button onClick={toggleDrawer('top', true)}>☰</Button>
      <Drawer
        anchor={'top'}
        open={top['top']}
        onClose={toggleDrawer('top', false)}
      >
        {list('top')}
      </Drawer>
    </>
  );
};
export default TemporaryDrawer;
