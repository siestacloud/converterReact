import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';





interface WalletCardProps {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}



export default function WalletCard(props: WalletCardProps) {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.CharCode}
        </Typography>
        <Typography sx={{ width: '300px' }} variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Курс: {props.Value}руб

        </Typography>
        <Typography variant="body2">
          Цифровой код {props.NumCode}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/conv">
          <Button size="small">Конвертировать</Button>
        </Link>

      </CardActions>
    </Card>
  );
}