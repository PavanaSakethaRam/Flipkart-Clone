import React from 'react';
import { useState, useContext } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart} from '@mui/icons-material';


// Components
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/dataProvider';
import Profile from './Profile';

const BoxWrapper = styled(Box)`
    display: flex;
    margin: 0 5% 0;
    align-items: center;
    justify-content: center;
    &>button,&>div,&>p{
        margin: 0 5px;
        font-size: 14px;
    }
    gap: 30px;
    // media query
    @media (max-width: 900px){
        display: block; 
    }
`

const LoginButton = styled(Button)`
    background-color: #FFFFFF;
    color: #2874f0;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    border: 1px solid #2874f0;
    padding: 5px 40px;
    height: 32px;
    &:hover{
        background-color: #2874f0;
        color: #FFFFFF;
        box-shadow: none;
        border: 1px solid #FFFFFF;
    }
`
const CustomButton = styled(Typography)(({
    '&:hover':{
        background: '#2874f0',
        opacity: '0.8',
        cursor: 'pointer',
    },
}));

const HeaderButtons = () => {
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <BoxWrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> : 
                <LoginButton variant='contained' onClick={handleClickOpen}>Login</LoginButton>
            }
            <CustomButton>Become a Seller</CustomButton>
            <CustomButton >More</CustomButton >

            <Box style={{ display: 'flex' }}
            >
                <ShoppingCart />
                <CustomButton >
                    Cart
                </CustomButton >
            </Box>
            <LoginDialog open={open} setOpen={setOpen}/>
        </BoxWrapper>
    )
}

export default HeaderButtons;