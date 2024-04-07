import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  
  return (
    <Card>
      <CardMedia style={{objectFit: 'contain'}} component="img"  height="150" image={product.thumbnail} alt={product.title} />
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body2">Price: ${product.price}</Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
