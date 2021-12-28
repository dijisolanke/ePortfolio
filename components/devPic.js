import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function DevPic() {
  return (
    <Card className="header-margin" sx={{ mt: 10, mx: 'auto', maxWidth: 345 }}>
      <CardMedia component="img" alt="HeadShot of a smiling Man" height="290" width="50" src="/images/devPic.jpg" />
    </Card>
  );
}
