import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import {createSvgIcon} from '@mui/material/utils';
import Box from '@mui/material/Box';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>,
  'Home',
);

export function Header() {

  return (  
    <React.Fragment>
    <Container maxWidth="lg">
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
      <IconButton>
          <a href='/'><HomeIcon /></a>
      </IconButton>
      <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
            My Travel
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      </Container>
    </React.Fragment>
  );
}


