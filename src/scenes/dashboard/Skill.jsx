import {Box} from "@mui/material";
import SkillComp from "../../components/utils/SkillComp";
import Header from "../../components/Header";

const Skill = () => {


    return (
        <Box m="20px">
            <Header title="SKILLS" subtitle="These are my proficient skillsets" />
           <SkillComp />
        </Box>
    )
}

export default Skill