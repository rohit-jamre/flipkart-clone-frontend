
import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, styled, Drawer,List,ListItem } from '@mui/material';
//components 
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',

    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled('img')(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    }
}));

const Header = () => {
    const logoURL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";
    const menuIcon = "https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png";
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const list =() =>(
        <Box style={{width:200}} onClick={handleClose}>
            <List button >
            <ListItem>
       <CustomButtons/>
            </ListItem>
            </List>
            </Box>
    )

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton src={menuIcon} alt="menu icon image" style={{ width: 30 }} onClick={handleOpen} />
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 76 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading> Explore <Box component="span" style={{ color: '#FFE500' }}> Plus </Box> </SubHeading>
                        <PlusImage src={subURL} alt=" sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;
