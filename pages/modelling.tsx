import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import storyblok from '../lib/storyblok';

import ModelCard from '../components/modelCard'
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


interface Asset {
  id: string
  alt: string
  filename: string
}

export default function Posts({ContentNode}) {
  

     const { content } = ContentNode;

    //to get the properties from my object I destructiured the ContentNode object 
    //to get the content which I then put into an array with the filter method
    //by selecting only the items with an id number greater than Zero. 
    //This is because I didn't want the first and last Items and incidentally, they didn't
    //have Id numbers. 
    const assets= Object.values(content).filter(({id}) => id != null);
 

    const urls = assets.map(({ filename }) => filename);
    console.log(urls)

    
    console.log( "Modelling COoOoOoOoONTentttttttttttttttt",assets);
    return (
     
      <>


        <div style={wrapper.all}>

          <ModelCard/>

            <Box className='model-box' style={styles.gridWrap} sx={{ 
              width: {lg: 1200, xl: 1500}, 
              height: 950,
              overflowX:'scroll',
              overflowY: 'scroll',
              flexGrow:1 
              }} >
                  <ImageList variant="masonry" cols={3} gap={22} >
                    {assets.map(({id, filename, alt}: Asset) => (
                      <Grid>  
                        <ImageListItem key={id}>
                          <img
                            src={`${filename}?w=248&fit=crop&auto=format`}
                            srcSet={`${filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={alt}
                            loading="eager"
                          />
                          <ImageListItemBar position="below" title={""} />
                        </ImageListItem>
                      </Grid>
                    ))}
                  </ImageList>
                </Box>
          </div>

      </>

    );
  }
  
  
  export const getServerSideProps: GetServerSideProps = async (context) => {
  
  
    
    const data = await storyblok(
      context.resolvedUrl,
      gql`
      query{ContentNode(id:"94269372") {
        id
        content
      } 
        
      }
      `,
      );
      
      return {
        props: { ContentNode: data.ContentNode },
        
      };
    
  };
  
  const wrapper = {
    all: {
      position: 'relative',
      margin: 'auto',
      top: 150, 
    }
  }as const;
  
const styles = {
  gridWrap: {
    position: 'relative',
    margin: 'auto',
    top: 50, 
  }
}as const;
