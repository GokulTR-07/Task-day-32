import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { incrementQuantity, decrementQuantity } from './cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-between pl-3 pr-4 bg-secondary pt-2 sticky-top'>
        <div>
          <Typography variant="h3">Your Cart</Typography>
        </div>
        <div>
          <Typography variant="body1">Total Quantity: {calculateTotalQuantity()}</Typography>
          <Typography variant="body1">Total Amount: ${calculateTotalAmount()}</Typography>
        </div>
      </div>
      <Grid container>
        {cart.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3} border={1} margin={3} >
            <ProductCard product={item} />
            <div className='d-flex p-2 justify-content-center'>
            <Button variant="contained" onClick={() => handleIncrement(item.id)}>+</Button>
            <Typography variant="body2" className='p-2'>{item.quantity}</Typography>
            <Button variant="contained" onClick={() => handleDecrement(item.id)}>-</Button>
            </div> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CartPage;
