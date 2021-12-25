import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ModelCard(){
   return(
        <Card className="header-margin" style={styles.gridWrap} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="HeadShot of a smiling Man"
          height="290"
          width="50"
          src="./images/plain.jpeg"
        />
        <CardContent>
          <Typography gutterBottom align="center" variant="overline" component="div">
            -Current Look-
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
            EMAIL: diji.solanke@yahoo.com
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          <b>Height:</b> 5'11 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
          <b>Chest:</b> 34<br/> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <b>Waist:</b> 31 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            <b>Inseam:</b> 34<br/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Sleeve Length:</b> 25 &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
            <b>Cross Shoulder:</b> 19<br/>
            <b>Shoe:</b> 9
          </Typography>
        </CardContent>
      </Card>
      )
  }

  const styles = {
    gridWrap: {
      position: 'relative',
      margin: 'auto', 
    }
  }