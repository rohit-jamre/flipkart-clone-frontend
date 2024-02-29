

import {Box,styled} from '@mui/material';
import {navData} from '../constant/data';
const Component = styled(Box)`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between;
`;
const Container = stlyled(Box)`
padding:12px 8px;
`
const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data =>
                    (
                        <Container>
                            <img src = {data.url} alt ="nav" style={{width:64}}/>
                            <p>{data.text}</p>
                        </Container>
                    )
                    )
            }
        </Component>
    )
}
export default NavBar;