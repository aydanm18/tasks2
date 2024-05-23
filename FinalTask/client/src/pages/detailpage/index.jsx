
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useGetOneQuery } from '../../services/productApi';
import { useNavigate, useParams } from 'react-router';
import { Button, Flex } from 'antd';

const DetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data } = useGetOneQuery(id);
  return (
    <>
      <div className="container"
       style={{display:'flex',justifyContent:'center',paddingTop:'80px'}}>
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={data?.data.image}
              alt="green iguana"
             
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
               Title:{data?.data.title}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
               Price:{data?.data.price}
              </Typography>
              <Typography variant="p" color="text.secondary">
              Description:{data?.data.description}
              </Typography>
            </CardContent>
              <div style={{margin:'10px'}}>
              <Button onClick={()=>{
                navigate('/')
              }} type="primary" danger>Go Back</Button>
              </div>
          </CardActionArea>
        </Card>
      </div>
    </>
  )
}

export default DetailPage