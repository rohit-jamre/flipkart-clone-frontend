import { Typography,Box,styled } from "@mui/material";
import { useState, useEffect } from "react";
const Header = styled(Typography)`
color:#878787;
background-color:#fff;
padding:15px 24px;
border-bottom:1px solid #f0f0f0;
margin-left:20px;
margin-top:10px;
`;
const Heading= styled(Typography)`
color:#878787;
`;
const Container=styled(Box)`
padding:15px 24px;
background-color:#fff;
margin-left:20px;

& > p{
  margin-bottom:20px;
  font-size:14px;
}
& >h6{
  margin-bottom:20px;
}
`;
const Price =styled(Box)`
float:right;
`;
 const Discount=styled(Typography)`
 color:green;
 `

const TotalView =({cartItems}) =>{
  const [price, setPrice] =useState(0);
  const [discount, setDiscount]=useState(0);
  useEffect(()=>{
    totalAmount();
  },[cartItems])
  const totalAmount =() => {
    let price =0,discount=0;
    cartItems.map(item=>{
      price +=item.price.mrp;
      discount +=(item.price.mrp-item.price.cost);
      
    });
    setPrice(price);
    setDiscount(discount);
  
  }
    return (
       <Box>
        <Header>
          <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
         <Typography>Price({cartItems?.length} item)
         <Price component ="span">₹{price}</Price>
         </Typography>
         <Discount> Discount 
         <Price component ="span">-₹{discount}</Price>
         </Discount>
         <Typography>Delivery Charges
         <Price component ="span">₹40</Price>
         </Typography>
         <Typography variant ="h6">Total Amount
         <Price component ="span">₹{price-discount+40}</Price>
         </Typography>
         <Discount>You Will Save ₹{discount} on This Order </Discount>
         

        </Container>
       </Box> 
    )
}
export default TotalView;