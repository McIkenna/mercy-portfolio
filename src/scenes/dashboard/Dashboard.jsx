import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import data from "../../data/profileData.json"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactBox from "../../components/utils/ContactBox";
import { PhoneAndroidOutlined } from "@mui/icons-material";
import Pie from "../../components/utils/Pie";
import { Link } from "react-router-dom";
import NetworkChart from "../../components/utils/NetworkChart";
import Funnel from "../../components/utils/Funnel";
import SkillComp from "../../components/utils/SkillComp";
const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const datas = data;
    return (
        <Box m="20px">
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px">
                <Box
                    gridColumn={{xs: "span 12", sm: "span 12", md: "span 6"}}
                    gridRow= "span 1"
                    backgroundColor={colors.primary[400]}
                    alighItems="center"
                    justifyItems="center"
                    display={{xs: "block", sm: "flex", md: "flex"}}
                    justifyContent="center"
                >
                    <ContactBox
                        title="Phone"
                        subtitle={datas.contact.phone}
                        progress="0.25"
                        icon={<PhoneAndroidOutlined sx={{ color: colors.purpleAccent[600] }} />}
                    />
                    <ContactBox
                        title="Email"
                        subtitle={datas.contact.email}
                        progress="0.50"
                        icon={<MailOutlineIcon sx={{ color: colors.purpleAccent[600] }} />}
                    />
                    <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    alighItems="center"
                    display="flex"
                    justifyContent="center"
                >
                
                </Box>
                </Box>
                {/*Second row */}
                <Box
                    gridColumn={{xs: "span 12", sm: "span 12", md: "span 6"}}
                    gridRow={{xs: "span 2", sm: "span 2", md: "span 2"}}
                    backgroundColor={colors.primary[400]}
                    overflow="auto">
                    <Box
                        p={{xs: '25px 10px 0 10px', sm: '30px 10px 0 10px', md: "45px 20px 0 20px"}}
                        alignItems="center">
                        <Typography variant="h5" fontWeight="600" color={colors.tealAccent[800]} pb='10px'>
                            PROFILE SUMMARY
                        </Typography>
                        <Typography variant={{xs: "h8", sm: "h7", md: "h6"}} color={colors.gray[100]} align="justify">
                            {datas.summary}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn={{xs: "span 12", sm: "span 12", md: "span 6"}}
                    gridRow={{xs: "span 4", sm: "span 3", md: "span 3"}}
                    backgroundColor={colors.primary[400]}
                    overflow="hidden"
                    p="0 0 0 5px"
                >
                    <Link to={"skill"}
                    style={{ textDecoration: 'none' }}
                    >
                     <Typography
                            color={colors.tealAccent[800]}
                            variant="h5"
                            fontWeight="600"
                            p="10px">
                            SKILLS & EXPERTISE
                        </Typography>
                    </Link>
                    <Box height="50vh" overflow="hidden" display={{xs: "none", sm: "flex", md: "flex"}}>
                        <Pie isDashboard={true}/>

                    </Box>
                    <Box height="60vh" overflow="hidden" display={{xs: "flex", sm: "none", md: "none"}}>
                        <SkillComp/>

                    </Box>
                </Box> 
                <Box
                    gridColumn={{xs: "span 12", sm: "span 12", md: "span 6"}}
                    gridRow={{xs: "span 2", sm: "span 3", md: "span 4"}}
                    backgroundColor={colors.primary[400]}
                    overflow-y="scroll"
                    p="20px 0 0 10px"
                >
                    <Link to={"work"}
                    style={{ textDecoration: 'none' }}
                    >
                    <Typography
                            color={colors.tealAccent[800]}
                            variant="h5"
                            fontWeight="600">
                            WORK EXPERIENCE
                    </Typography>
                    </Link>
                    <Box height="60vh">
                        <Funnel
                        />

                    </Box>
                </Box> 
                <Box
                    gridColumn={{xs: "span 12", sm: "span 12", md: "span 6"}}
                    gridRow={{xs: "span 2", sm: "span 2", md: "span 2"}}
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.primary[500]}`}
                        colors={colors.gray[100]}
                        p="15px"
                    >
                    <Link to={"education"}
                    style={{ textDecoration: 'none' }}
                    >
                        <Typography
                            color={colors.tealAccent[800]}
                            variant="h5"
                            fontWeight="600">
                            EDUCATION AND CERTIFICATIONS
                        </Typography>
                        </Link>
                    </Box>
                    {datas.educations.map((edu) => {
                        return (
                            <Box
                                key={edu.id}
                                display={{xs: "block", sm: "flex", md: "flex"}}
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`2px solid ${colors.primary[500]}`}
                                p="15px">
                                <Box>
                                    <Typography
                                        color={colors.gray[100]}
                                        fontWeight="600">
                                        {edu.schoolName}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        color={colors.gray[200]}
                                        variant="h6">
                                        {edu.major}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        color={colors.gray[300]}
                                        fontWeight="600">
                                        {edu.honor}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <Box>
                </Box>

            </Box>
        </Box>
    )
}
export default Dashboard