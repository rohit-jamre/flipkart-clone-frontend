




import React from 'react';
import { Box, Button, Divider, Grid, styled, Typography, useTheme } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)(({ theme }) => ({
    marginTop: 10,
    background: '#FFFFFF',
    padding: theme.spacing(2) // Adjust padding according to your needs
}));

const Deal = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
}));

const Count = styled(Box)(({ theme }) => ({
    color: '#7f7f7f',
    display: 'flex',
    padding: theme.spacing(1)
}));

const DealText = styled(Typography)(({ theme }) => ({
    fontSize: 22,
    fontWeight: 600,
    marginRight: theme.spacing(1),
    lineHeight: '32px'
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: 2,
    fontSize: 13,
    padding: theme.spacing(1, 2),
    fontWeight: 600,
    [theme.breakpoints.down('md')]:
    {
        marginLeft:'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 10,
        padding: theme.spacing(1, 2),
        fontWeight: 600,
    }
}));

const Img = styled('img')(({theme})=>({
    width: 'auto',
    height: 150,
    [theme.breakpoints.down('md')]:{
        width:'auto',
        height:100,
    }
}))

const Text = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    marginTop: theme.spacing(1)
}));

const Slide = ({ products, title, timer }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box component="span"> {hours}: {minutes}:{seconds} left </Box>;
    };

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {timer &&
                    <Count>
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Count>
                }
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                keyBoardControl={true}
                centerMode={true}
                doListClass="custom-dot-list-style"
                containerclass="carousel-container"
                itemClass="carousel-tem-padding-40px"
            >
                {products.map(product => (
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
                        <Box textAlign="center" padding={isMobile ? 2 : 4}>
                            <Img src={product.url} alt="product" />
                            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{product.discount}</Text>
                            <Text style={{ color: '#212121', opacity: '0.6' }}>{product.tagline}</Text>
                        </Box>
                    </Link>
                ))}
            </Carousel>
        </Component>
    );
};

export default Slide;
