import { Modal, Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";

const theme = createTheme({
    palette: {
      primary: {
        main: '#2b344f',
      },
    },
});

function LoginForm({formOpen, handleFormClose}) {
 
    return (
        <Modal
            className=" z-50"
            open={formOpen}
            onClose={handleFormClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="flex flex-row top-1/3 h-fit w-full absolute justify-center outline-none">
                <div className="gap-3 flex flex-col bg-gradient-to-b from-slate-100 to-slate-300 rounded-xl shadow-2xl z-50 p-4 pt-6 lg:p-7 lg:pt-10 xl:basis-1/4 lg:basis-1/3 md:basis-2/7 sm:basis-1/2 basis-3/4 h-fit">
                <p className="text-lg lg:text-2xl font-playfair font-bold self-center">Log in</p>
                <ThemeProvider theme={theme}>
                    <TextField id="email" label="Email" variant="outlined" color="primary" className=""/>
                    <TextField id="pass" label="Password" type="password" variant="outlined"/>
                    <Button variant="contained" color="primary">Sign up</Button>
                </ThemeProvider>
                </div>
            </div>
        </Modal>
    )
}

export default LoginForm