import {Box, Typography, useTheme} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../themes";
import publications from "../../data/publication.json"
import Header from "../../components/Header";

const Publication =() =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const datas = publications.publications;
    return (
        <Box m="20px">
            <Header title="Publications" subtitle="List of Publications, Papers, and Research Topics" />
                {datas.map((data) => {
                    return(
                    <Accordion defaultExpanded key={data.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: '40%', flexShrink: 0, fontWeight:"bold"}} color={colors.purpleAccent[200]} variant="h6">
                        {data.title}
                    </Typography>
                    <Typography color={colors.purpleAccent[300]}>
                       {data.authors}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography color={colors.tealAccent[400]} sx={{fontWeight:"bold"}}>
                            Abstract
                </Typography>
                <Typography color={colors.purpleAccent[300]}>
                    {data.abstract}
                </Typography>
                </AccordionDetails>
            </Accordion>
                )})}
        </Box>
    )
}

export default Publication