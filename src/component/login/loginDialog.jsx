
import { useState } from 'react';
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup } from '../../service/api';

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

const LoginDialog = ({ open, setOpen }) => {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    setAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    setAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    await authenticateSignup(signup);
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
                <TextField variant="standard" label="Enter Email/Mobile number" />
                <TextField variant="standard" label="Enter Password" />
                <Text>By continuing, you agree to Flipkart's Terms of use and Privacy Policy.</Text>
                <LoginButton>Login</LoginButton>
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
