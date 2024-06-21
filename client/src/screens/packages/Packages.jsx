import React from 'react';
import {Card, CardContent, Typography, Grid, Box, } from '@mui/material'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import unsplash1 from '../../assets/unsplash1.png'

const Packages = () => {
    const cardStyle = {
        // width: '300px',  // Adjust the width as needed
        // height: '400px', // Adjust the height as needed
      };
      const mCardStyle={
        // width:"300px",
        // height:'480px',
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
                <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
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
                <Box display="flex" alignItems="center" mb={1}>
                <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Local Travel
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Party
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Activities
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Events
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                   Full Itinerary
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        {/* Second Card (Elevated) */}
        <Grid item xs={10} sm={6} md={3.5} zIndex={3} position="relative" marginTop="-50px">
          <Card elevation={20} sx={mCardStyle}>
          <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                  Standard
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
                <Box display="flex" alignItems="center" mb={1}>
                  <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Local Travel
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Party
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Activities
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Events
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <RemoveDoneIcon sx={{color:'grey'}}/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Full Itinerary
                  </Typography>
                </Box>
              </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={10} sm={6} md={3} zIndex={2} position="relative">
          <Card elevation={10} sx={cardStyle}>
          <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                  Premium
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
                <Box display="flex" alignItems="center" mb={1}>
                  <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                    Local Travel
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Party
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Activities
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Events
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                <DoneAllIcon/>
                  <Typography variant="body2" color="textSecondary" ml={1}>
                  Full Itinerary
                  </Typography>
                </Box>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default Packages;
