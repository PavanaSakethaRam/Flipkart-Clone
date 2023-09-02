import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import Countdown from 'react-countdown';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const BoxWrapper = styled(Box)`
margin-top: 10px;
background: #ffffff;
`

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
`

const Timer = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
    color: #000000;
    font-weight: 600;
    span {
        padding: 0 8px;
    }
`

const DealText = styled(Typography)`
    font-size: 22px;
    color: #212121;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
`
const ViewDealButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0 !important;
    border-radius: 2px !important;
    font-size: 13px !important;
    font-weight: 500;
    color: #ffffff !important;
    padding: 10px 15px !important;
    &:hover {
        background: #1c64f2 !important;
    }
`
const Image = styled('img')({
    width: 'auto',
    height: 150,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',

})

const Slide = ({ products, title, timer }) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span>{hours}:{minutes}:{seconds}</span>;
    };
    return (
        <BoxWrapper>
            <Deal>
                <DealText >{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>}
                <ViewDealButton variant='contained' color='primary'>View All</ViewDealButton>
            </Deal>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass='carousel-container'
            >
                {
                    products.map((product) => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <Image src={product.url} alt={product.title} />
                                <Typography
                                    style={{ fontWeight: 600, color: '#212121', fontSize: 14 }}
                                >
                                    {product.title.shortTitle}
                                </Typography>
                                <Typography
                                    style={{ fontSize: 12, color: 'green' }}
                                >
                                    {product.discount}
                                </Typography>
                                <Typography
                                    style={{ fontSize: 14, color: '#212121', opacity: '.6' }}
                                >
                                    {product.tagline}
                                </Typography>
                            </Box>
                        </Link>

                    ))
                }
            </Carousel>
        </BoxWrapper>
    )
}

export default Slide