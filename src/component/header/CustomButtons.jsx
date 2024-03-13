
import {useState} from 'react';
import {Box, Button, Typography,styled } from '@mui/material';
// components
import LoginDialog  from  '../login/loginDialog'

const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & > p, & > div {
    margin-right:40px;
    font-size:14px;
}
`;
const Container = styled(Box)`
display: flex;

`;
const LoginButton = styled(Button)`
color:#2874f0;
background-color:#FFFFFF;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-sadhow:none;
font-weight:600;
height:32px;
`
const CustomButtons = () => {
    const [open ,setOpen]= useState(false);
    const openDialog =() =>{
       setOpen(true);
    }
    return (
        <Wrapper>
           <LoginButton variant ="contained" onClick={()=> openDialog()}>Login</LoginButton>
           <Typography style ={{marginTop:3, width:135}}>Become a Seller</Typography>
           <Typography style ={{marginTop:3}}>More</Typography>
           <Container>
           
            <Typography style ={{marginTop:3, fontSize:14}}>Cart</Typography>
           </Container>
           <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )

}
export default CustomButtons;