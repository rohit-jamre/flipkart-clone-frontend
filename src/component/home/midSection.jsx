
import {Box} from '@mui/material';
import {imageURL} from '../../component/constant/data';
import {Grid,styled} from '@mui/material';
const Wrapper = styled(Grid)`
margin-top:20px;
`;
const Img= styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:150,
        width:'100%',
        justifyContent:'center'

    }
}))
const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
        <Wrapper lg={12} sm ={12} md={12} xs={12} container>
            {
                imageURL.map(image=>(
                    <Grid item lg={4} sm ={12} md={4} xs={12}>
                    <img src ={image} alt ="image" style={{width:`100%`}}/>
                    </Grid>
                ))
            }
        </Wrapper>
        <Img src ={url} alt="covid"/>
        </>
    )
}
export default MidSection