import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
import Header from "../../components/Header";
import data from "../../data/profileData.json"
import WorkCard from "../../components/utils/WorkCard";

const Work=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const datas = data;
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Work Experiences" subtitle="These are places worked in the past and presently" />
            </Box>
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="20px"
            pt={{xs: "5px", sm: "40px", md: "10%"}}>
                {
                datas.workExperience.map((work) => {
                    return(<Box
                gridColumn={{xs: "span 12", sm: "span 6", md: "span 3"}}
                backgroundColor={colors.indigo[400]}
                alighItems="center"
                display="flex"
                justifyContent="center"
             >
                <WorkCard 
                title={work.jobTitle}
                company={work.companyName}
                description={work.jobDescription}
                location={work.location}
                />
            </Box>)})
                }
            </Box>
            </Box>
    )}

export default Work
