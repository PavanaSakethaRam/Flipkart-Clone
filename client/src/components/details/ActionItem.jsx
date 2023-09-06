import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart, FlashOn } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0px 0px 80px',
    marginRight: 20,
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'

    }
}))

const Image = styled('img')({
    width: '90%', 
});

const StyledButton = styled(Button)(({theme})=>({
    marginTop: 20,
    width: '48%',
    height: 50,
    borderRadius: 2,
    fontSize: 16,
    [theme.breakpoints.down('lg')]: {
        width: '46%',
        height: 45,
        fontSize: 14
    },
    [theme.breakpoints.down('md')]: {
        width: '46%',
        height: 45,
        fontSize: 14
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
        height: 40,
        fontSize: 12
    }
}));

const ActionItems = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = product;
    const addItemToCart = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
        setQuantity(quantity+1);
    }
    return (
        <LeftContainer>
            <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt="Product" />
            </Box>
            <StyledButton variant='contained' style={{ marginRight: 10, background: '#fb641b', color: '#fff' }} onClick={()=>addItemToCart()}>
                <ShoppingCart style={{ marginRight: 10 }}/>
                Add to Cart
            </StyledButton>
            <StyledButton variant='contained' style={{ background: '#ff9f00', color: '#fff' }}>
                <FlashOn style={{ marginRight: 10 }} />
                Buy Now
            </StyledButton>
        </LeftContainer>
    );
}

export default ActionItems;