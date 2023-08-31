import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";

const StyledMenu = styled(Menu)`
    margin-top: 5px;

`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const LogoutUser = () => {
        setAccount('');
        console.log("Logout Successfull");
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        // window.location.href = '/';
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: '2px', cursor:'pointer' }}>{account}</Typography>
            </Box>
            <StyledMenu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{LogoutUser()}} style={{padding:3}}>
                    <PowerSettingsNewIcon color="primary" style={{paddingRight:10}}/>
                    <Typography>Logout</Typography>
                </MenuItem>
            </StyledMenu>
        </>
    )
};

export default Profile;