import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const BoxWrapper = styled(Box)`
    padding: 10px 10px;
    background-color: #f2f2f2;
`

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.getProducts);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Fragment>
            <Navbar />
            <BoxWrapper>
            <Banner />
            <MidSlide products={products} title='Deal of the Day' timer={true}/>
            <MidSection />
            <Slider products={products} title='Discounts for You' timer={false}/>
            <Slider products={products} title='Suggested Items' timer={false}/>
            </BoxWrapper>
        </Fragment>
    );
};

export default Home;