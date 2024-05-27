
import { Box, Typography, styled } from "@mui/material"
const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

const Component  =styled(Box)`
height:65vh;
margin:100px 140px;
background-color:#fff;




`;
const Container =styled(Box)`
text-align:center;
padding-top:120px;
`
const EmptyCart=() =>{
    return (
        < Component>
            <Container>
            <img src={imgurl} alt="Empty Cart " style={{width:'25%'}}/>
            <Typography style={{fontSize:20, fontWeight:600}}>Missing Cart items?</Typography>
            <Typography>Add items to it now</Typography>
            </Container>
        </ Component>
    )
}
export default EmptyCart;