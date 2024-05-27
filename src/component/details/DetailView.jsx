import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Typography,styled ,Grid} from '@mui/material'; 
import ActionItem from './ActionItem';
import ProductDetail from './productDetail';
const Component= styled(Box)`
background:#f2f2f2;
margin-top:55px;
`;
const Container= styled(Grid)(({theme})=>({
    background:'#FFFFFF',
display:'flex',
[theme.breakpoints.down('md')]:{
    margin:0
}
}))
const RightContainer=styled(Grid)`
margin-top:50px;
`

const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);


    return (
        <Component style={{marginleft:'100px'}}>
           

            {product && Object.keys(product).length && 
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>
                            {product.title && product.title.longTitle}
                            
                        </Typography>
                        <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>8 Rating & 1 Review
                        <Box component="span"><img src={fassured} style={{width:77, marginLeft:20}}/></Box>
                        </Typography>
                        <Typography>
                            <Box component="span"style={{fontSize:28}}>₹{product.price.cost}</Box>  &nbsp;
                            <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box> &nbsp;
                            <Box component="span" style={{color:'#11a61d'}}>{product.price.discount}Off</Box>
                        </Typography>
                        <ProductDetail product={product}/>
                    </RightContainer>
                </Container>
            }
        </Component>
    );
};

export default DetailView;