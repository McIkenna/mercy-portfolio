import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import { Link } from "react-router-dom";

const ContactBox = ({ title, subtitle, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{width:"100%", m:"20px 30px"}}>
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.gray[100] }}>
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