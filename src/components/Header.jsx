import {Typography, Box, useTheme} from "@mui/material";
import { tokens } from "../themes";
const Header =({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box 
        mb="30px"
        display="block">
            <Typography
            variant="h2"
            color={colors.indigo[300]}
            fontWeight="bold"
            sx={{mb: "5px"}}>
                {title}
            </Typography>
            <Typography variant={{xs: "h7", sm: "h6", mb: "h5"}}color={colors.indigo[800]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;