import {useEffect} from 'react';

// Compnents 
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './slide';
import {Box,styled} from '@mui/material';
import {getProducts} from '../../redux/actions/productAction';
import {useDispatch,useSelector} from 'react-redux';
import MidSection from './midSection';

const  Component = styled(Box)`
padding: 20px 10px;
background:#F2F2F2;

`;
const Home = () => {
    const {products}=useSelector(state =>state.getProducts)
    const dispatch = useDispatch();
    console.log(products);
    useEffect(()=>{
        dispatch(getProducts())
     },[dispatch])
    return (
        <>
        <NavBar/>
        <Component>
        <Banner/>
         <Slide products ={products} title="Deal of the Day" timer={true}/>
         <Slide products ={products}title="Discount for you" timer={false}/>
         <MidSection/>
         <Slide products ={products}title="Suggesting Items " timer={false}/>
         <Slide products ={products}title="Top Selection" timer={false}/>
         <Slide products ={products}title="Recommended Items" timer={false}/>
        </Component>
        </>
    )
}
export default Home;