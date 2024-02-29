import logo from './logo.svg';
import './App.css';

// component 
import Header from './component/header/Header';
import Home from './component/home/Home';
import {Box} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Box style = {{marginTop:55}}>
      <Home/>
      </Box>
    </div>
  );
}

export default App;
