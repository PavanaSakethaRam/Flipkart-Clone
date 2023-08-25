import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const BoxWrapper = styled(Box)`
    padding: 10px 10px;
    background-color: #f2f2f2;
`

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <BoxWrapper>
            <Banner />
            </BoxWrapper>
        </Fragment>
    );
};

export default Home;