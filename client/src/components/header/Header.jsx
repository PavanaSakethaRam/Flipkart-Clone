import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, Toolbar, Box, Typography, styled, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Components
import SearchBar from './Search';
import HeaderButtons from './HeaderButtons';

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
    box-shadow: none;
    padding: 0;
`

const BoxComponent = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`
const TypoComponent = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusLogo = styled('img')({
    'width': '10px',
    'margin-left': '4px'
});

const MenuButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none'
    }
}));

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    const [open, setOpen] = useState(false);
    const handleOpenDrawer = () => {
        setOpen(true);
    }
    const list = () => (
        <Box style={{width:200}}>
            <List>
                <ListItem >
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
    )
    return (
        <StyledHeader
            // on resize of window, set the width of the window
            onResize={() => setWindowWidth(window.innerWidth)}
        >
            <Toolbar style={{ minHeight: 55 }}>
                {windowWidth <= 900 &&
                    <MenuButton color='inherit' onClick={handleOpenDrawer}>
                        <MenuIcon />
                    </MenuButton>}
                <Drawer open={open} onClose={() => setOpen(false)}>
                    {list()}
                </Drawer>
                <BoxComponent to='/'>
                    <img src={logoURL} alt="logo" style={{ 'width': '75px' }} />
                    <TypoComponent>Explore&nbsp;
                        <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        <PlusLogo src={subURL} alt="sub-logo" />
                    </TypoComponent>
                </BoxComponent>
                <SearchBar />
                <Box
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                    <HeaderButtons />
                </Box>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;