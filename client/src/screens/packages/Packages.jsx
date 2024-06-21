import React from 'react';
import {Card, CardContent, Typography, Grid, Box, } from '@mui/material'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import unsplash1 from '../../assets/unsplash1.png'
const Packages = () => {
    const cardStyle = {
        // width: '300px',  // Adjust the width as needed
        height: '400px', // Adjust the height as needed
      };
      const mCardStyle={
        // width:"300px",
        height:'480px',
      };
  return (
    <div className='pt-40 '>
        <div>
            <h1 className='font-satisfy-regular text-7xl flex items-center justify-center'> Our Packages </h1>
        </div>
      
      <div className='pt-20 p-20'>
      <Grid container spacing={-1} justifyContent="center" className="mt-8">
        {/* First Card */}
        <Grid item xs={10} sm={6} md={3} zIndex={2} position="relative">
            <Card elevation={10} sx={cardStyle}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Basic
                </Typography>
                <Box component="img" src={unsplash1} alt="Basic Plan" sx={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
                <Box display="flex" alignItems="center" mb={1}>
                  <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Travel from Src to Dest
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Stay
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Local Travel
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        {/* Second Card (Elevated) */}
        <Grid item xs={10} sm={6} md={3.5} zIndex={3} position="relative" marginTop="-50px">
          <Card elevation={20} sx={mCardStyle}>
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
        <Grid item xs={10} sm={6} md={3} zIndex={2} position="relative">
          <Card elevation={10} sx={cardStyle}>
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

export default Packages;
