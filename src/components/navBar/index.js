import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <Box sx={{flex: 10}}>
     <AppBar position="relative">
         <Toolbar variant="dense">
          <Typography variant="h6" color="brown" component="div">
          Cursos ADA
          </Typography>
        </Toolbar> 
      </AppBar>
    </Box>
  );
}
