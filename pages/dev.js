import React from "react";
import TechStack from "../components/techLogos";
import Typography from '@mui/material/Typography';
import DevCard from "../components/devCard";

export default function Dev(){
    return(
        <>
            <div style={position}>

                <Typography variant="inherit" align="center">
                   <h1><em>My Tech Stack</em></h1>
                </Typography>
                <TechStack/>
                <Typography variant="inherit" align="center">
                   <h1><em>What I've Built</em></h1>
                </Typography>
                <DevCard/>
            </div>
        </>
    )
}

const position = {
    position: "relative",
    top: 200
}