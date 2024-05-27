import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const ActionItem = ({ product }) => {
    const LeftContainer = styled(Box)(({ theme }) => ({
        minWidth: '40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('lg')]: {
            padding: '20px 40px',
        }
    }));

    const Image = styled('img')({
        padding: '15px 20px',
        border: '1px solid #f0f0f0f0',
        width: '90%'
    });

    const StyleButton = styled(Button)`
        width: 46%;
        height: 50px;
        border-radius: 2px;
    `;

    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        console.log('Adding item to cart:', product); 
        console.log('Quantity:', quantity); 
        dispatch(addToCart(id, quantity));
        navigate('/Cart');
    };

    return (
        <LeftContainer>
            <Image src={product.url} alt="product" />
            <StyleButton variant="contained" onClick ={() => addItemToCart()} style={{ background: '#ff9f00' }}>
                Add to Cart
            </StyleButton>
            &nbsp;
            <StyleButton variant="contained" style={{ background: '#fb541b' }}>
                Buy Now
            </StyleButton>
        </LeftContainer>
    );
};

export default ActionItem;
