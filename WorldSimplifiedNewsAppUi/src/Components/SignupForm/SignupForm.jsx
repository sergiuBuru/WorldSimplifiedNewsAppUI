import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from '../LoginForm/LoginForm';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b344f',
    },
  },
});

function SignupForm() {
  const [formOpen, setForm] = useState(false);

    // trigger the login modal to close
    const handleOpenForm = () => {
        setForm(true);
    }

    // trigger the login modal to open
    const handleFormClose = () => {
        setForm(false);
    } 
  return (
    <div className="flex flex-row top-1/3 h-fit w-full absolute justify-center">
        <div className="gap-2 flex flex-col bg-gradient-to-b from-slate-100 to-slate-300 rounded-xl shadow-2xl z-50 p-4 pt-6 lg:p-7 lg:pt-10 lg:basis-1/3 md:basis-3/5 sm:basis-1/2 basis-3/4 h-fit">
          <p className="text-lg lg:text-2xl font-playfair font-bold">Don't let headlines scare you. Sign up</p>
          <div className='flex justify-center'>
            <p className="text-md mt-1 lg:mt-2">Already have an account? </p>
            <p className='text-md mt-1 lg:mt-2 mb-2 cursor-pointer text-blue-800 ml-1' onClick={handleOpenForm} >Log in</p>
          </div>
          <ThemeProvider theme={theme}>
            <TextField id="username" label="Username" variant="outlined" color="primary" className=""/>
            <TextField id="email" label="Email" variant="outlined" color="primary" className=""/>
            <TextField id="pass" label="Password" type="password" variant="outlined"/>
            <Button variant="contained" color="primary">Sign up</Button>
          </ThemeProvider>
          <LoginForm formOpen={formOpen} handleFormClose={handleFormClose}/>
        </div>
      </div>
  )
}

export default SignupForm