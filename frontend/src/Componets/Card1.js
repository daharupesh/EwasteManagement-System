import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345,margin:5,background: "text.danger" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Recycle e-waste for a better tommorrow
          Dispose your old phone or related accessories & contribute
          towards a safter environmnet
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}