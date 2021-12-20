import { gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import storyblok from '../../lib/storyblok';
import SiteLayout from '../../components/siteLayout'
import React from 'react';
import { Player } from 'video-react';




//this returns the whole landing page
export default function Posts({ContentNode}) {
  
  
    const content = ContentNode.content
    const asset1 = ContentNode.content.Asset1.filename
    
    console.log( "Yaaaa this shit right hereeeeeeeeeeee",ContentNode.content.Asset1.filename);
    return (
     

        <>
          <section className='page-body'>
            
            
            <div style={vidBox}>

              <Player>
                <source src={asset1} />
              </Player>
              
            </div>
            

            <a className="read-more" href="">  <u><p className="govuk-body govuk-!-font-weight-bold blue">Read more stories</p></u> </a> <i className="fas fa-chevron-right blue-arrow fa-1x"></i>
          </section>

        </>


     
    );
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
    
  };
  
  const vidBox = {
    height: 800,
    width: 800,
    top:100,
    position: "relative",
    left: 100,
  }
  
