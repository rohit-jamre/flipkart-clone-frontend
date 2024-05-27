

import {InputBase,Box ,styled} from '@mui/material';
const SearchIcon ="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png";
const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`;
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
display:flex;
`;
const SearchIcons=styled('img')(({theme})=>({
  marginRight:10,
  height:23,
  marginTop:4,
  [theme.breakpoints.down('md')]:{
   marginRight:3,
   height:18,
   marginTop:7,
   marginLeft:5,
  }

}));
const Search  = ()=> {
    return (
        <SearchContainer>
        <InputSearchBase
        placeholder ="Search for product,brand and more"
        />
        <SearchIcons src ={SearchIcon} alt="search icons" style={{width:20}}/>
        </SearchContainer>
    )
}
export default Search;