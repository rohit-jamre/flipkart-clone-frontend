
import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem,styled } from '@mui/material';
const Component =styled(Menu)`
margin-top:5px;
`;
const Logout =styled(Typography)   `
font-size:14px;
text-align:center;
`

const Profile = ({ account , setAccount}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout =() => {
      setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor:'pointer' }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose();logout();}}><Logout>Logout</Logout></MenuItem>
            </Component>
        </>
    );
};

export default Profile;
