import {Typography, Grid, Box, styled,Button} from '@mui/material';
import {useSelector} from 'react-redux';
//Component
import CartItem from './cartItem';
import TotalView from './totalView';
import EmptyCart from './emptyCart';


const Container =styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0',
    }
}));
 const Header =styled(Box)`
 padding:15px 24px;
 background-color:#fff;
 `;
 const ButtonWraper= styled(Box)`
 padding:16px 22px;
 background-color:#fff;
 
 box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
 border-top:1px solid #f0f0f0;
 `;
 const StyleButton= styled(Button)`
 display:flex;
 margin-left:auto;
 background-color:#fb641b;
 color:#fff;
 width:250px;
 height:51px;
 border-radius:2px;
 `;
 
const Cart =() =>{
    const {cartItems } = useSelector(state => state.cart);
    return (
        <>
        
       {
        cartItems.length ?
        <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12}>
             <Header>
                <Typography>
                my cart ({cartItems.length})
                </Typography>
                </Header>
                {
                    cartItems.map(item =>(
                       <CartItem item ={item}/>
                    ))
                }
                <ButtonWraper>
                    <StyleButton>Place Order</StyleButton>
                </ButtonWraper>
                
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
               <TotalView cartItems={cartItems}/>
            </Grid>

        </Container>
        : <Box>
            <EmptyCart/>
        </Box>
       }
       


       </>
    )
}
export default Cart;