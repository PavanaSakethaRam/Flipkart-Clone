import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import { addEllipsis } from '../../utils/commonUtils';
import GroupedButton from './GroupedButton';

const BoxComponent = styled(Box)`
    border-top: 1px solid #f0f0f0;
    padding: 20px 0;
    margin: 0;
    display: flex;
    &:hover {
        background: #fafafa;
    }
`
const LeftComponent = styled(Box)`
    margin: 20px;
    margin-bottom: 0;
`

const SmallText = styled(Typography)`
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    color: #878787;
`

const CartItem = ({ item }) => {
    const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
    const RemoveButtonHandler = () => {
        console.log("Remove Button Clicked")
    }
    return (
        <BoxComponent>
            <LeftComponent>
                <img src={item.url} alt="Product"
                    style={{ height: 110, width: 110, borderRadius: 5 }}
                />
                <GroupedButton />
            </LeftComponent>
            <Box 
                style={{ margin: '20px' }}
            >
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span">
                        <img src={fassured} alt="Flipkart Assured"
                            style={{ width: 70, marginLeft: 10, verticalAlign: 'middle' }}
                        />
                    </Box>
                </SmallText>
                <Typography
                    style={{ marginTop: 10, color: '#388e3c', fontWeight: 600 }}
                >
                    <span style={{ fontWeight: 600, fontSize: 20 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787', fontSize: 14 }}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388e3c', fontSize: 14 }}>{item.price.discount} off</span>
                </Typography>
                <Button
                    style={{ marginLeft: 'auto', marginTop: 45 }}
                    onClick={RemoveButtonHandler}
                >
                    <Typography style={{ fontSize: 14, fontWeight: 600, borderRadius: 2, color:"#000"}}>Remove</Typography>
                </Button>
            </Box>
        </BoxComponent>
    )
}

export default CartItem