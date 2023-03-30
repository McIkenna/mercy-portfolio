import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import { Link } from "react-router-dom";

const ContactBox = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" 
            margin={{xs: "10px", sm: "20px", md: "30px"}}
            alignContent="center"
            justifyContent="center">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Box 
                     display={{ xs: "none", sm: "flex", md: "flex" }}
                     >
                    {icon}
                    </Box>
                
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.gray[100] }}
                       >
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" m="2px">
                <Box >

                    <Typography variant="h6" sx={{ color: colors.tealAccent[100] }}>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}

export default ContactBox