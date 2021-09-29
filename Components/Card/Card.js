import styles from './Card.module.scss';

export default function Card(){
  return(
    <div className={styles.row}>
      <div className={styles.card}>
        <img className={styles.img}src="https://static.pneustore.com.br/medias/sys_master/images/images/h86/h7c/8968879734814/pneu-pirelli-aro-15-scorpion-atr-31x10-5r15-109s-1.jpg" alt="pneu"/>
          <div className={styles.info}>
            <p>Pneu Pirelli Aro 15 Scorpion ATR 31X10.5R15</p>
            <h2>Preço Total</h2>
            <h3>id</h3>
            <img src="https://www.pneustore.com.br/medias/sys_master/images/images/hc9/he5/9021183950878/mini-banner-pneustore-pirelli.svg" alt="fabricante"/>
            <h3>$</h3>
          </div>
      </div>
    </div>
  );
}



// import * as React from 'react';
// import styles from './Card.module.scss';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';



// export default function MultiActionAreaCard() {

  
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           widht="200"
//           image="https://static.pneustore.com.br/medias/sys_master/images/images/h86/h7c/8968879734814/pneu-pirelli-aro-15-scorpion-atr-31x10-5r15-109s-1.jpg"
//           alt="pneu qualquer"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Modelo do pneu
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Preço total
//           </Typography>
//           <Typography>
//             id
//           </Typography>
//           <Typography>
//             quantidade
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           comprar
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

