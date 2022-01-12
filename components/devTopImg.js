import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function DevTopImg() {
  return (
    <Card className="header-margin" style={styles.gridWrap} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="HeadShot of a smiling Man" height="290" width="50" src="/images/devPic.jpg" />
      <CardContent>
        <Typography gutterBottom align="center" variant="overline" component="div">
          -About ME-
        </Typography>
        <Typography>
          Im a 27 year old web developer. <br />I have one and a half years worth of professional experience as of
          january 2022 <br />
          I'm most comfortable using the React framework.
          <br /> <br /> Email: diji.solanke@googlemail.com <br />
          To view my Github:
          <u>
            <a href="https://github.com/dijisolanke" target="_blank" rel="noreferrer">
              {' '}
              Click Here
            </a>
          </u>
        </Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  gridWrap: {
    position: 'relative',
    margin: 'auto',
  },
};
