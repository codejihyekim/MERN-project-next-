import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {createSvgIcon} from '@mui/material/utils';
import { logoutRequest } from '@/modules/auth/login';
import {useDispatch, connect} from 'react-redux';
import { useSelector } from 'react-redux';
import { bgcolor } from '@mui/system';
import Link from '@mui/material/Link';


const sections = [
    { title: '글쓰기', url: "/board/boardWrite" },
    { title: '목록', url: "/board/boardList" },
    { title: '수정', url: '#' },
    { title: '삭제', url: '#' },
  ];

export function Nav() {
    
    return (
      <>
      <Container maxWidth="lg">
      <Toolbar
      component="nav"
      variant="dense"
      sx={{justifyContent: 'space-between', overflowX: 'auto'}}
    >
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
    </Container>
      </>  
    );
}