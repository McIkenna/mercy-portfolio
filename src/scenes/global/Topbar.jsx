import {Box, IconButton, useTheme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../themes";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Topbar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box display="flex">
               <Box pt="20px">
                <IconButton >
                        <Person2OutlinedIcon />
                </IconButton>
                <IconButton >
            <Link to={"https://www.linkedin.com/in/mercy-okonna"} target="_blank"
                    style={{ textDecoration: 'none' }}
                    ><LinkedInIcon fontSize="large" color="blue"/>
                    </Link>
            </IconButton>
                </Box> 
            <Box m="20px 0  0 20px">
            <Header title="Mercy Okonna"/>
            </Box>
            </Box>
            <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon />): (<LightModeOutlinedIcon />)}

            </IconButton>
            </Box>
            {/* <Box display="flex">
                    
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <Person2OutlinedIcon />
                </IconButton>
                <IconButton></IconButton>

            </Box> */}
        </Box>
    )
}
export default Topbar