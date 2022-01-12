import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';

export default function DevCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={position}>
      <Accordion sx={{ bgcolor: '#f1f1f1' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '42%', flexShrink: 0 }}>This Site</Typography>
          <Typography sx={{ color: 'text.secondary' }}>React based project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I first began building the skeleton (the Header and Footer) for this site using vanilla HTML and CSS. <br />
            For the CSS I used Gulp Sass in order to make my stylings cross browser compatible. <br />
            <br />
            For the main sections (Modelling, Music pages), there are a few different things at play. <br />
            I stored all my media Assets on StoryBlok, a headless Content Management System. <br />
            This is so I could update content without having to re-deploy my site or change the code.
            <br />
            I then used Apollo Client to make asynchronous requests and cache the data to improve the speed and
            functionality of the site. <br />
            <br />
            I learned this from my first mentor at Zaltek Digital(Software company where I got my start). <br />
            His impact on my journey as a developer is greater than I can put into words.
            <br />
            <br />
            Anyways... <br />
            Finally, using Vercel I was able to deploy this project. <br />
            All in all, the project took me two and a half weeks from start to finish.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#f1f1f1' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '42%', flexShrink: 0 }}>Proof of Concept</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            <u>
              <a href="https://tester-1liiu8xon-dijisolanke.vercel.app/posts" target="_blank" rel="noreferrer">
                {' '}
                Click here to view site
              </a>
            </u>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardMedia component="img" alt="HeadShot of a smiling Man" height="400" width="50" src="/images/poc1.png" />
          <br />
          <CardMedia component="img" alt="HeadShot of a smiling Man" height="400" width="50" src="/images/poc2.png" />
          <br />
          <CardMedia component="img" alt="HeadShot of a smiling Man" height="400" width="50" src="/images/poc3.png" />
          <br />
          <Typography>
            The aim of this project was to give a short demonstration to perspective clients showcasing a potential
            build <br />
            method for a site they wanted. This is why it doesn't have much functionality.
            <br />
            <br />
            This project is where I acquired many of the tools I used to build the site you're looking at. <br />
            Here I was introduced to React and Nextjs along with the concept of building projects using
            reusable/scaleable components. <br /> <br />
            I was also introduced to two headless CMS' Strapi and Storyblok and shown how to interact with data via
            Api's. I also learned some of Javascripts core features like the map and sort functions. <br />
            Although it doesn't look like much, this is where my real learning began. <br />
            <br />
            The posts (images and blog text) were all stored first using Strapi(CMS) and then Storyblok(also CMS) <br />
            I learned about Sass and how to create Gulp-tasks in order to compile css as well as automate an array of
            tasks <br />I also learned how to deploy a project using Vercel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#f1f1f1' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '42%', flexShrink: 0 }}>Glass Artist Site</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            <u>
              <a href="https://sachadelabre.com/" target="_blank" rel="noreferrer">
                {' '}
                Click here to view site
              </a>
            </u>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardMedia
            component="img"
            alt="HeadShot of a smiling Man"
            height="400"
            width="50"
            src="/images/sachaImg1.png"
          />
          <br />
          <CardMedia
            component="img"
            alt="HeadShot of a smiling Man"
            height="400"
            width="50"
            src="/images/sachaImg2.png"
          />
          <br />
          <CardMedia
            component="img"
            alt="HeadShot of a smiling Man"
            height="400"
            width="50"
            src="/images/sachaImg3.png"
          />
          <br />
          <Typography>
            This was my very first site. It was for a paying client. It was also my first paying gig as a dev. <br />
            I made it using vanilla javascript, bespoke HTML and CSS. <br />I learned how to save information while
            users browsed different pages of the site using local storage and <br />
            it was through building this site that I was able to understand the concept of Object oriented Programming.{' '}
            <br /> <br />
            My client wanted to be able to receive order requests via email so I used PHP to process form requests.{' '}
            <br />I found this quite tough but through building this project I learned to become a better problem
            solver. <br />
            <br />
            The whole project took me seven months to complete <br />
            and resulted in me getting an internship at a tech start-up company called Zaltek Digital.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#f1f1f1' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Github & More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To view my Github &nbsp;&nbsp;
            <u>
              <a href="https://github.com/dijisolanke" target="_blank" rel="noreferrer">
                {' '}
                Click here
              </a>
            </u>{' '}
            <br />
            Email: diji.solanke@yahoo.com
            <br />
            <br />
            <h4>More</h4>I worked on a government Project just before Christmas (2021), the content of which has to
            remain classified. <br />
            On that Project I was working with Drupal 9. Throughout that project, I learned a lot about Drupal and It's
            templating engine. <br />
            I learned how to use Twig. A templating mark-up language. <br />
            <br />
            I'm currently building my first full mobile application using Flutter. The learning curve is quite steep but
            I expect to <br />
            be finished in a couple of months at which point I shall add a link to it here.
            <br />
            I think flutter is a powerful framework and am looking forward to mastering it. Not gonna lie, it's quite
            exciting and I spend <br />
            most morning's working on it.
            <br />
            <br />
            I've also spent some time working with WordPress' child Theming feature and had the pleasure of making very
            minor adjustments <br />
            To a live website called{' '}
            <u>
              <a href="https://www.websand.co.uk/consent-signup-page/" target="_blank" rel="noreferrer">
                {' '}
                Websands
              </a>
            </u>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const position = {
  position: 'relative',
  top: 20,
  margin: 'auto 10%',
};
