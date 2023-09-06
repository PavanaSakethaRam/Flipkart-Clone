import React from 'react'
import { Box, Button, styled, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import TotalView from './TotalView';

const GridContainer = styled(Grid)(({ theme }) => ({
    padding: "30px 135px",
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse'
    }
}))

const HeaderComponent = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: '15px 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    }
}))

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length > 0 ?
                    <GridContainer container spacing={2}>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <HeaderComponent>
                                    My Cart ({cartItems.length})
                                </HeaderComponent>
                                {
                                    cartItems.map(item => (
                                        <CartItem item={item} />
                                    ))
                                }                       
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView />
                        </Grid>
                    </GridContainer>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Your cart is empty
                        </Typography>
                    </Box>
            }
        </>
    )
}

export default Cart;