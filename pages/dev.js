import React from 'react';
import TechStack from '../components/techLogos';
import Typography from '@mui/material/Typography';
import DevCard from '../components/devCard';
import DevPic from '../components/devPic';
import DevTopImg from '../components/devTopImg';
export default function Dev() {
  return (
    <>
      <div style={position}>
        <DevTopImg />
        <Typography variant="inherit" align="center">
          <h1>
            <em>Technologies I've used</em>
          </h1>
        </Typography>
        <TechStack />

        <Typography variant="subtitle1" align="center" sx={{ my: 10 }}>
          ⬇Projects⬇
        </Typography>

        <DevCard />
        <DevPic />
      </div>
    </>
  );
}

const position = {
  position: 'relative',
  top: 200,
};
