import React from "react";
import { useState, useContext } from "react";
import { Dialog, Box, DialogContent, Typography, styled } from "@mui/material";
import { TextField, Button } from "@mui/material";

import { authensicateSignup, authensicateSignin } from "../../service/api";
import { DataContext } from "../../context/dataProvider";

const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
const LoginBox = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 0;
    overflow: hidden;
`

const BoxImage = styled(Box)`
    background: #2874f0 url(${logoURL}) no-repeat center 65%;
    height:100%;
    padding: 45px 35px;
    width: 40%;
    display: flex;
    flex-direction: column;
`

const BoxWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex-grow: 1;
    gap: 30px;
`

const LoginButton = styled(Button)`
    background-color: #fb641b;
    color: #ffffff;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    height: 48px;
    &:hover{
        background-color: #fb641b;
        color: #FFFFFF;
        opacity: 0.8;
    }
`

const RequestOTPButton = styled(Button)`
    background-color: #ffffff;
    color: #2874f0;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    height: 48px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover{
        background-color: #2874f0;
        color: #ffffff;
        opacity: 0.8;
    }
`

const PolicyText = styled(Typography)`
    font-size: 14px;
    color: #878787;
    font-weight: 600;
`

const CreateAccountText = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
`

const LoginDialog = (props) => {
    const [login, toggleLogin] = useState(true);
    const [error, setError] = useState(false);
    const [SignUpdata, setSignUpData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
    });
    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const { setAccount } = useContext(DataContext);

    const handleLoginChange = (e) => {
        setError(false);
        setLoginData({ ...LoginData, [e.target.name]: e.target.value });
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...SignUpdata, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        let res = await authensicateSignup(SignUpdata);
        console.log(res.data.message);
        if(!res) return;
        props.setOpen(false);
        toggleLogin(true);
        setAccount(SignUpdata.firstname);
    };

    const handleLogin = async() => {
        let res = await authensicateSignin(LoginData);
        if(res){
            console.log("Login Successfull");
            props.setOpen(false);
            toggleLogin(true);
            setAccount(res.data.userName);
        }else{
            setError(true);
        }
    };

    return (
        <Dialog open={props.open} onClose={() => { props.setOpen(false); toggleLogin(true); }} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <LoginBox>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <>
                        {
                            login ?
                                <BoxImage>
                                    <Typography style={{ fontWeight: '600', fontSize: '24px', color: '#ffffff' }}>Login</Typography>
                                    <Typography style={{ marginTop: '20px', fontWeight: '500', color: '#dbdbdb' }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                                </BoxImage>
                                :
                                <BoxImage style={{width:'28%'}}>
                                    <Typography style={{ fontWeight: '600', fontSize: '24px', color: '#ffffff' }}>Looks like you're new here!</Typography>
                                    <Typography style={{ marginTop: '20px', fontWeight: '500', color: '#dbdbdb' }}>Sign up with your mobile number to get started</Typography>
                                </BoxImage>
                        }
                    </>
                    {
                        login ?
                            <BoxWrapper>
                                <TextField label="Enter Email" variant="standard" name="email" onChange={(e)=>{handleLoginChange(e)}}/>
                                {error && <Typography style={{color:'red',fontSize:14,cursor:'pointer',fontWeight:600}}>Please Porvide valid credentials</Typography>}
                                <TextField label="Enter Password" variant="standard" name="password" onChange={(e)=>{handleLoginChange(e)}}/>
                                <PolicyText>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</PolicyText>
                                <LoginButton onClick={handleLogin}>Login</LoginButton>
                                <Typography style={{ textAlign: "center" }}>OR</Typography>
                                <RequestOTPButton>Request OTP</RequestOTPButton>
                                <CreateAccountText onClick={() => { toggleLogin(false) }}>New to Flipkart? Create an account</CreateAccountText>
                            </BoxWrapper>
                            :
                            <BoxWrapper style={{ marginTop: 0, gap: 20}}>
                                <TextField label="Enter First Name" variant="standard" name="firstname" onChange={(e)=> {handleSignUpChange(e)}}/>
                                <TextField label="Enter Last Name" variant="standard" name="lastname" onChange={(e)=> {handleSignUpChange(e)}}/>
                                <TextField label="Enter Email" variant="standard" name="email" onChange={(e)=> {handleSignUpChange(e)}}/>
                                <TextField label="Enter Password" variant="standard" name="password" onChange={(e)=> {handleSignUpChange(e)}}/>
                                <TextField label="Enter Mobile Number" variant="standard" name="phone" onChange={(e)=> {handleSignUpChange(e)}}/>
                                <LoginButton onClick={handleRegister}>Continue</LoginButton>
                                <RequestOTPButton onClick={() => { toggleLogin(true) }}>Already Have Account? Login</RequestOTPButton>
                            </BoxWrapper>
                    }
                </Box>
            </LoginBox>
        </Dialog>
    );
};

export default LoginDialog;