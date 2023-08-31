import axios from 'axios';

const URL = "http://localhost:8000";

export const authensicateSignup = async (data) => {
    try{
        return await axios.post(`${URL}/signup`,data);
    }catch(err){
        console.log("Error while signup");
        console.log(err);
    }
}

export const authensicateSignin = async (data) => {
    try{
        return await axios.post(`${URL}/login`,data);
    }catch(err){
        console.log("Error while Login");
        console.log(err);
    }
}