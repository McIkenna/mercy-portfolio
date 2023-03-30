import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../themes";

const WorkCard = ({title, company, description,location }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="20px">
            <Box display="flex" justifyContent="space-between" >
            <Box>
                <Typography variant="h3" sx={{ color: colors.tealAccent[100]}}>
                {company}. {location} 
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ color: colors.purpleAccent[200]}} pt="10px">
                {title}
                </Typography>
                <Typography variant="h6" sx={{ color: colors.gray[200]}}  align="justify">
                {description}
                </Typography>
            </Box>
            </Box>
        </Box>
    )

}

export default WorkCard