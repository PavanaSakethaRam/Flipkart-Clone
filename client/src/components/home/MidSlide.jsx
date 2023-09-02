import Slide from "./Slide"
import { Box, styled } from "@mui/material"

const BoxComponent = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    background: #ffffff;
`
const LeftComponent = styled(Box)(({theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({theme}) => ({
    background: '#fffff',
    padding: '5',
    width: '17%',
    marginTop: '10px',
    marginLeft: '10px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))
const MidSlide = ({products, title, timer }) => {
    const adURL='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70'
    return (
        <>
            <BoxComponent>
                <LeftComponent>
                    <Slide products={products} title={title} timer={timer}/>
                </LeftComponent>
                <RightComponent>
                    <img src={adURL} alt="AD" style={{width:217}}/>
                </RightComponent>
            </BoxComponent>
        </>
    )
}

export default MidSlide