
import {useState,useContext} from 'react';
import {Box, Button, Typography,styled,Badge } from '@mui/material';
import {DataContext} from '../../context/DataProvider';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
// components
import LoginDialog  from  '../login/loginDialog';
import Profile from './profile';

const Wrapper = styled(Box)(({theme})=> ({
display:'flex',
margin:'0 3% 0 auto',
'& > *': {
    marginRight:'40px | important',
    fontSize:14,
    alignItems:'center',
},
[theme.breakpoints.down('md')]:{
    display:'block',
},
[theme.breakpoints.down('lg')]:{
   
    fontSize:14,
    alignItems:'center',
}
    
}));
const Container = styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block',
    }
    
}));

const LoginButton = styled(Button)(({theme})=>({
    color:'#2874f0',
    backgroundColor:'#FFFFFF',
    textTransform:'none',
    padding:'5 40',
    borderRadius:2,
    boxSadhow:'none',
    fontWeight:600,
    height:32,
    marginRight:30,
    marginLeft:20,
    
}))

const CustomButtons = () => {
    
    const [open ,setOpen]= useState(false);
    const {account, setAccount} =useContext(DataContext);
    const {cartItems}= useSelector(state => state.cart);
    const openDialog =() =>{
       setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount} />:
            
           <LoginButton variant ="contained" onClick={()=> openDialog()}>Login</LoginButton>
            }
           <Typography style ={{marginTop:3, width:135,marginRight:20}}>Become a Seller</Typography>
           <Typography style ={{marginTop:3 ,width:90}}>More</Typography>
          <Container to="./cart">
            
           <Typography style ={{marginTop:3, fontSize:14, width:90}} ><Badge badgeContent={cartItems?.length} color="secondary">Cart</Badge></Typography>
           
           </Container>
           
           
           <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )

}
export default CustomButtons;