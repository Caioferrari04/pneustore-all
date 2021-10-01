import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { Api } from '../../src/Api';

export default function Card(props){
  
  console.log(props)
  const produto = props[1]

  return(

        <>
          {
            produto ? 
            <div className={styles.row}>
              <div className={styles.card}>
                <div className={styles.info}>
                  <img src={produto.imagemUrl}/>
                  <h2>{produto.nome}</h2>
                  <h3>{produto.preco}</h3>
                  <img src={produto.imagemUrlMarca}/>

                </div>
              </div>
            </div>
            : null
          }
        </>
  )
}

<<<<<<< HEAD






=======
>>>>>>> adf3b78f58f7152a070f0c31586bc5d2b1bc1526
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

