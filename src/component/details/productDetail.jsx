


import {Typography,Box,styled,Table,TableBody,TableRow,TableCell} from '@mui/material';
import { red } from '@mui/material/colors';

const date = new Date(new Date().getTime()+(5*24*60*60*1000));
const ProductDetail =() =>{
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const LocalOfferIcon='https://static-00.iconduck.com/assets.00/local-offer-icon-512x512-nn77pkmq.png';
    const SmalText =styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p{
        font-size:14px;
        margin-top:10px;
    }
    `;
    const ColumnText=styled(TableRow)`
    font_size:14px;
    vertical-align:baseline;
    &> td {
        font-size:14px;
        margin-top:10px;
        border:none;
        
    `
    const OfferIcon=styled('img')(
        {
            
            
            marginRight:3
        }
    );
    return (
       <>
       <Typography>
        Available Offers
       </Typography>
       <SmalText>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>Get extra 20% upto ₹ on 1 item(s) T&C </Typography>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>Get extra 13% off (price inclusive of discount) T&C</Typography>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>Sign up for Flipkart Pay Later and get flipkart Gift Card worth ₹100 know More  </Typography>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>Buy 2 items save 5%; Buy 3 or more save 10% T&C </Typography>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>5% Cashback on Filpkart Axis Bank Card</Typography>
        <Typography><OfferIcon src={LocalOfferIcon} alt="offers icons" style={{width:15}}/>No Cost EMI on Bjaj Finserve EMI Card on Card value above ₹2999 T&C</Typography>
       </SmalText>
       <Table style={{border:'none'}}>
        <TableBody >
            <ColumnText>
                <TableCell style={{ color:'#878787'}}>
                    Delivery
                </TableCell>
                <TableCell style={{fontWeight:600}}>
                    Delivery By {date.toDateString()} | ₹40
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{ color:'#878787'}}>
                    Warranty
                </TableCell>
                <TableCell style={{fontWeight:600}}>
                    No Warranty 
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{ color:'#878787'}}>
                    Seller
                </TableCell>
                <TableCell style={{fontWeight:600}}>
                    <Box component="span" style={{color:'#2874f0'}}> SuperComNet</Box>
                    <Typography>GST Invoice Available</Typography>
                    
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2} >
                    <img src={adURL} style={{width:390}} alt="flipkartpoints"/>
                    
                </TableCell>
               
            </ColumnText>
            
        </TableBody>
       </Table>
       </>
    )
}
export default ProductDetail;