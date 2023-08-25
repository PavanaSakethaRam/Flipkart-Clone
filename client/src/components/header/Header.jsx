import {AppBar,Toolbar,Box,Typography,styled} from '@mui/material';

// Components
import SearchBar from './Search';
import HeaderButtons from './HeaderButtons';

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
    box-shadow: none;
    padding: 0;
`

const BoxComponent = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const TypoComponent = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusLogo = styled('img')({
    'width': '10px',
    'margin-left': '4px'
});

const Header = () => {
    const logoURL="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <BoxComponent>
                    <img src={logoURL} alt="logo" style={{'width':'75px' }}/>
                    <TypoComponent>Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        <PlusLogo src={subURL} alt="sub-logo" />
                    </TypoComponent>
                </BoxComponent>
            <SearchBar />
            <HeaderButtons />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;