import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';




export function FeaturedPost() {

  return (
    <Container maxWidth="lg">
    <Grid item xs={10} md={6} container spacing={2}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Featured post
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Nov 12
            </Typography>
            <Typography variant="subtitle1" paragraph>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image='https://source.unsplash.com/1600x1200/?trip'
            alt='Image Text'
          />
        </Card>
        </CardActionArea>
        <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Post title
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Nov 11
            </Typography>
            <Typography variant="subtitle1" paragraph>
              This is a wider card with supporting text below as a natural lead-in to additional content.
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image='https://source.unsplash.com/1600x1200/?trip'
            alt='Image Text'
          />
        </Card>
        </CardActionArea>
    </Grid>
    </Container>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

