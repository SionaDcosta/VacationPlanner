import React from 'react';
import {Card, CardContent, Typography, Grid} from '@mui/material'
const Contact = () => {
  return (
    <div className='pt-40 '>
        <div>
            <h1 className='font-satisfy-regular text-7xl flex items-center justify-center'> Our Packages </h1>
        </div>
      
      <div className='pt-20 p-20'>
      <Grid container spacing={3} justifyContent="center" className="mt-8">
        {/* First Card */}
        <Grid item xs={10} sm={6} md={4} zIndex={2} position="relative">
          <Card elevation={5}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Package 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of Package 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card (Elevated) */}
        <Grid item xs={10} sm={6} md={4} zIndex={3} position="relative" marginTop="-50px">
          <Card elevation={10}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Package 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of Package 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={10} sm={6} md={4} zIndex={2} position="relative">
          <Card elevation={5}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Package 3
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description of Package 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Contact;
