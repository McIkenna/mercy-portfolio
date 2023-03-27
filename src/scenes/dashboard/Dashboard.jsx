import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import data from "../../data/profileData.json"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContactBox from "../../components/utils/ContactBox";
import { PhoneAndroidOutlined } from "@mui/icons-material";
import Pie from "../../components/utils/Pie";
import { Link } from "react-router-dom";
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
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    alighItems="center"
                    display="flex"
                    justifyContent="center"
                >
                    <ContactBox
                        title="Phone"
                        subtitle={datas.contact.phone}
                        progress="0.25"
                        icon={<PhoneAndroidOutlined sx={{ color: colors.purpleAccent[600], fontSize: "26px" }} />}
                    />
                    <ContactBox
                        title="Email"
                        subtitle={datas.contact.email}
                        progress="0.50"
                        icon={<MailOutlineIcon sx={{ color: colors.purpleAccent[600], fontSize: "26px" }} />}
                    />

                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    alighItems="center"
                    display="flex"
                    justifyContent="center"
                >
                    <ContactBox
                        title="LinkedIn"
                        subtitle={datas.contact.social}
                        progress="0.75"
                        icon={<ShareOutlinedIcon sx={{ color: colors.purpleAccent[600], fontSize: "26px" }} />}
                    />
                </Box>
                {/*Second row */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                >
                    <Box height="55vh">
                        <Pie isDashboard={true}/>

                    </Box>
                </Box> 
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto">
                    <Box
                        mt="25px"
                        p='0 30px'
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography variant="h3" fontWeight="600" color={colors.gray[100]} pb='10px'>
                            Profile Summary
                        </Typography>
                        <Typography variant="h5" color={colors.gray[100]} justifyContent="">
                            {datas.summary}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
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
                        <Typography
                            color={colors.tealAccent[800]}
                            variant="h5"
                            fontWeight="600">
                            EDUCATION AND CERTIFICATES
                        </Typography>
                    </Box>
                    {datas.educations.map((edu) => {
                        return (
                            <Box
                                key={edu.id}
                                display="flex"
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
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box height="55vh">
                        <Pie isDashboard={true}/>

                    </Box>
                </Box> 
                <Box>
                </Box>

            </Box>
        </Box>
    )
}
export default Dashboard