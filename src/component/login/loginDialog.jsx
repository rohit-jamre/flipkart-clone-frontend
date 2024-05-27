import React, { useState, useContext } from 'react';
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup , authenticateLogin} from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 83%;
  width: 25%;
  padding: 45px 35px;

  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;

  & > * {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subheading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: 'Sign up with your mobile number to get started'
  },
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
};
const loginInitialValue ={
  username: '',
  password: ''
}

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(null); // State to handle errors during signup
  const [login, setLogin] = useState(loginInitialValue)
  const { setAccount} = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setSignup(signupInitialValues); // Clear signup form fields when closing dialog
    setError(null); // Reset error state when closing the dialog
  };

  const toggleSignup = () => {
    toggleAccount(account === accountInitialValues.login ? accountInitialValues.signup : accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
  };
  const onValueChange =(e)=>{
    setLogin({...login,[e.target.name]: e.target.value})
  }
  const loginUser =async() =>
  {
    let response= await authenticateLogin(login);
    console.log(response);
    
    handleClose();
    setAccount(login.username);

  }
  

  // Function to validate signup data
  const validateSignupData = (data) => {
    // Implement your validation logic here
    // Example: Check if required fields are filled
    // Return true if data is valid, otherwise false
    // You can customize this based on your requirements
    return data.firstname && data.lastname && data.username && data.email && data.password && data.phone;
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
          </Image>
          <Wrapper>
            {account.view === 'login' ? (
              <>
                <TextField variant="standard" onChange ={(e) => onValueChange(e)} name ='username' label="Enter Your Username" />
                <TextField variant="standard" onChange ={(e) => onValueChange(e)} name ='password' label="Enter Password" />
                <Text>By continuing, you agree to Flipkart's Terms of use and Privacy Policy.</Text>
                <LoginButton onClick ={() => loginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
              </>
            ) : (
              <>
                <TextField variant="standard" onChange={onInputChange} name="firstname" label="Enter First Name" />
                <TextField variant="standard" onChange={onInputChange} name="lastname" label="Enter Last Name" />
                <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
                <TextField variant="standard" onChange={onInputChange} name="email" label="Enter Email" />
                <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" />
                <TextField variant="standard" onChange={onInputChange} name="phone" label="Enter Phone" />
                {error && <Typography color="error">{error}</Typography>} {/* Display error message if there's any */}
                <LoginButton onClick={signupUser}>Continue</LoginButton>
                <CreateAccount onClick={() => setAccount(accountInitialValues.login)}>Existing? Login</CreateAccount>
              </>
            )}
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

