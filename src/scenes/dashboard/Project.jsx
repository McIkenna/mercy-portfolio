import {Box, Typography, useTheme} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../themes";
import projects from "../../data/projects.json"
import Header from "../../components/Header";

const Project =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const datas = projects.projects;
    return (
        <Box m="20px">
            <Header title="Projects" subtitle="List of Projects, Tasks and Research Performed" />
                {datas.map((data) => {
                    return(
                    <Accordion defaultExpanded key={data.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '40%', flexShrink: 0, fontWeight:"bold"}} color={colors.tealAccent[200]} variant="h6">
                        {data.projectTitle}
                    </Typography>
                    <Typography color={colors.gray[600]}>
                       {data.projectSummary}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography color={colors.tealAccent[300]}>
                   {data.details}
                </Typography>
                </AccordionDetails>
            </Accordion>
                )})}
        </Box>
    )
}

export default Project