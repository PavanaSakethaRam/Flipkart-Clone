import { Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const Image = styled('img')(({theme}) => ({
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120

    }
}))

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/443/image/4789bc3aefd54494.jpg?q=70'

    return (
        <>
            <Grid container spacing={2} style={{ marginTop: 10 }} lg={12} sm={12} md={12} xs={12}>
                {
                    imageURL.map((image, index) => (
                        <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                            <img src={image} alt="AD" style={{ width: '100%', marginTop: 10 }} />
                        </Grid>
                    ))
                }
            </Grid>
            <Image src={url} alt="Covid 19"/>
        </>
    )
}

export default MidSection;