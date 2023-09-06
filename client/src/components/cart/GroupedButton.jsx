import { Button, ButtonGroup, styled } from "@mui/material"

const BoxComponent = styled(ButtonGroup)`
    margin: 20px 0;
    display: flex;
    &:hover {
        background: #fafafa;
    }
`
const StyledButton = styled(Button)`
    border-radius: 50%;
`

const GroupedButton = () => {
    return(
        <BoxComponent>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </BoxComponent>
    )
}

export default GroupedButton;