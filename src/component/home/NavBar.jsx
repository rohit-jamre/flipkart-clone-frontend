

import {Box,styled, Typography} from '@mui/material';
import {navData} from '../constant/data';
const Component = styled(Box)(({theme})=>({
    display:'flex',
marginLeft:55,
marginRight:130,
margintop: 0,
marginBotton: 130,
justifyContent:'space-between',
[theme.breakpoints.down('md')]:{
    display:'flex',
    marginLeft:0,
    marginRight:110,
    margintop: 0,
    marginBotton: 110,
    justifyContent:'space-between',
}

}))
const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Text =styled(Typography)`
font-size:16px;
font-weight:600;
font-family:inherit;
`;
const NavBar = () => {
    return (
        <Box style={{background: '#fff'}}>
        <Component>
            {
                navData.map(data =>
                    (
                        <Container>
                            <img src = {data.url} alt ="nav" style={{width:64}}/>
                            <Text>{data.text}</Text>
                        </Container>
                        
                    )
                    )
            }
        </Component>
        </Box>
    )
}
export default NavBar;