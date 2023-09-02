import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const NavBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    margin: '0 10%',
    alignItems: 'center',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
        margin: '0 5%'
    }
}))
const StyledText = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: Roboto, Arial, sans-serif;
    line-height: 22px;
    color: #212121;
`

const Navbar = () => {
    return (
        <NavBox>
            {
                navData.map((data) => (
                    <Box style={{textAlign:'center'}}>
                        <img src={data.url} alt="nav" style={{ width : 64}}/>
                        <StyledText>{data.text}</StyledText>
                    </Box>
                ))
            }
        </NavBox>
    );
}

export default Navbar;