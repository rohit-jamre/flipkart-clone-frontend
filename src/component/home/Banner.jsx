
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {styled} from '@mui/material'
import { bannerData } from '../constant/data';
const Image =styled('img')({
  width:'100%',
  height:280
})
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      item: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      item: 1
    }
  };

const Banner =() =>{
    return (
      
        <Carousel
          
      responsive={responsive}
      swipeable ={false}
      draggable ={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl ={true}
      slideToslide={1}
      doListClass = "custom-dot-list-style"
      containerclass ="carousel-container"
      itemClass="carousel-tem-padding-40px"
      >
      {
        bannerData.map(data => (
            <Image src ={data.url} alt="banner" />
        ))
      }
        </Carousel>    )
}
export default Banner;