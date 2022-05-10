import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export function MainFeaturedPost() {
  
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 10,
        width: 1100,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('https://source.unsplash.com/1600x1200/?trip')`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={'https://source.unsplash.com/1600x1200/?trip'} alt={'main image description'} />}
      <Box
        sx={{
          position: 'center',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 1, md: 3 },
              pr: { md: 5 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Title of a longer featured blog post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
            </Typography>
            <Link variant="subtitle1" href="#">
              Continue reading…
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

