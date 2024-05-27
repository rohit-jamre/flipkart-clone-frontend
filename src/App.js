import logo from './logo.svg';
import './App.css';

// component 
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
import {Box} from '@mui/material';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './component/details/DetailView';
import Cart from './component/Cart/cart';

function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>   
       <Header />
      <Box style = {{marginTop:55}}>
        <Routes>
      <Route path ='/' element ={<Home/>}/>
     <Route path ='/product/:id' element ={ <DetailView/>}/>
     <Route path ='/cart' element={<Cart/>}/>
      </Routes>
      </Box>
      </BrowserRouter> 
    </DataProvider>
  );
}

export default App;
