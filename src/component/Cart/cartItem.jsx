import { Box, Typography, styled, Button } from '@mui/material';
import { removeFromCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
// component
import ButtonGroup from './buttonGroup';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background-color: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ width: 110 }} />
        <ButtonGroup />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{item.title.longTitle}</Typography>
        <SmallText>
          Seller: RetailNet <img src={fassured} alt="logo-icon" style={{ width: 65, marginLeft: 10 }} />
        </SmallText>
        <Typography style={{ margin: '20px 0' }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>{' '}
          &nbsp;
          <Box component="span" style={{ color: '#878787' }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>{' '}
          &nbsp;
          <Box component="span" style={{ color: '#11a61d' }}>
            {item.price.discount}Off
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
