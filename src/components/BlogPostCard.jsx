import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BlogPostCard() {
  return (
    <Card sx={{margin:"1.5rem"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name of the page the Blog post Belongs
        </Typography>
        <Typography variant="h5" component="div">
          Title of the page 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Main content of the blog post of which only 100 or 200 characters should be displayed and the rest can be viewed from the blog page 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
