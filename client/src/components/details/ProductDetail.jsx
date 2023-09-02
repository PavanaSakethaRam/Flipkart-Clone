import React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ProductDetail = ({ product }) => {
    const fassuredURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <div>
            <Typography
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: '#212121'
                }}
            >{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 Ratings & 1 Reviews
                <span style={{ color: '#388e3c', marginLeft: 10 }}>3 Answered Questions</span>
                <Box component="span"><img src={fassuredURL} alt="F assured" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography style={{ marginTop: 20, color: '#388e3c', fontSize: 14 }}>Special PriceGet extra 10% off (price inclusive of discount)</Typography>
            <Typography style={{ marginTop: 20 }}>
                <span style={{ fontWeight: 600, fontSize: 20 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#878787', fontSize: 14 }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ color: '#388e3c', fontSize: 14 }}>{product.price.discount} off</span>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available Offers</Typography>
            <Box style={{ marginTop: 10 }}>
                <Typography style={{ marginTop: 10, fontSize: 14, verticalAlign: 'baseline' }}><LocalOfferIcon style={{ fontSize: 18, color: '#388e3c' }} />&nbsp;&nbsp;Bank Offer 10% off on ICICI Bank Credit Cards, up to ₹1500. On orders of ₹4999 and above</Typography>
                <Typography style={{ marginTop: 10, fontSize: 14, verticalAlign: 'baseline' }}><LocalOfferIcon style={{ fontSize: 18, color: '#388e3c' }} />&nbsp;&nbsp;Bank Offer 10% off on ICICI Bank Debit Cards, up to ₹500. On orders of ₹4999 and above</Typography>
                <Typography style={{ marginTop: 10, fontSize: 14, verticalAlign: 'baseline' }}><LocalOfferIcon style={{ fontSize: 18, color: '#388e3c' }} />&nbsp;&nbsp;Bank Offer ₹100 Off on First Pay Later Transaction</Typography>
                <Typography style={{ marginTop: 10, fontSize: 14, verticalAlign: 'baseline' }}><LocalOfferIcon style={{ fontSize: 18, color: '#388e3c' }} />&nbsp;&nbsp;Get a Google Nest Hub (Chalk) at just ₹5,999 on purchase of select TVs, laptops, ACs and mobile</Typography>
                <Typography style={{ marginTop: 10, fontSize: 14, verticalAlign: 'baseline' }}><LocalOfferIcon style={{ fontSize: 18, color: '#388e3c' }} />&nbsp;&nbsp;Get Google Nest mini at just ₹1999 on purchase of select Smartphones, TVs, Laptops, TV streaming</Typography>
            </Box>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color: '#878787', fontSize: 14 }}>Delivery</TableCell>
                        <TableCell style={{fontSize: 14, fontWeight: 600 }}>{date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787', fontSize: 14 }}>Warranty</TableCell>
                        <TableCell style={{ fontSize: 14 }}>No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787', fontSize: 14, marginTop:10 }}>Seller</TableCell>
                        <TableCell>
                            <Box style={{ fontSize: 14, color: '#2874f0' }}>SuperComNet</Box>
                            <Typography style={{ fontSize: 14, color: '#878787' }}>GST invoice available</Typography>
                            <Typography style={{ fontSize: 14, color: '#878787' }}>14 Days Return Policy</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="Flipkart Points" style={{width:390}}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: '#878787', fontSize: 14 }}>Description</TableCell>
                        <TableCell style={{ fontSize: 14 }}>{product.description}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    )
}

export default ProductDetail;