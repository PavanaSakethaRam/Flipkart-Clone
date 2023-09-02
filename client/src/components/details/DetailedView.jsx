import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { useParams } from 'react-router-dom';
import { Box, Grid, styled } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const ParentBox = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
`

const Container = styled(Grid)(({theme}) => ({
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.1)',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        margin: '0',
        padding: '0'
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
`

const DetailedView = () => {
    const dispatch = useDispatch();
    const productId = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && productId.id !== product.id)
            dispatch(getProductDetails(productId.id));
        // dispatch(getProductsBySlug());
    }, [dispatch, productId, product, loading]);
    return (
        <>
            <ParentBox style={{overflow:'hidden'}}>
                {
                    Object.keys(product).length > 0 && product &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
                }
            </ParentBox>
        </>
    )
}

export default DetailedView