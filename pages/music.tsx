import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import storyblok from '../lib/storyblok';
import React from 'react';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




export default function Music({ContentNode}) {
    
  const content  = ContentNode.content

  const vidUrls = Object.values(content).filter(({ id })=> id != null)

  
  console.log('Music vidZZZZZZZZZ',vidUrls);

  
    
    return(
      <div style={styles.wrap}>
        <Box sx={{ flexGrow:1 }}>
          <Grid container spacing={1}>
            {vidUrls.map(({ filename, id })=>(
              <Grid item xs={12} md={6}>
                <ReactPlayer key={id}
                  className='react-player'
                  url={filename}
                  width='90%'
                  height='90%'
                  controls ={true}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>


    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  
  
    
    const data = await storyblok(
      context.resolvedUrl,
      gql`
      query{ContentNode(id:"93629139") {
        id
        content
      } 
        
      }
      `,
      );
      
      return {
        props: { ContentNode: data.ContentNode },
        
      };
    
    }
  
    const styles = {
      wrap: {
        position: 'relative',
        margin: 'auto',
        top: 150,
        padding: 100
      },
    }as const