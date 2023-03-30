import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import {tokens} from "../../themes";
import Header from "../../components/Header";
import data from "../../data/profileData.json";
import CardMedia from '@mui/material/CardMedia';

const Education=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const datas = data;
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Education Background" subtitle="Here you will see my educational qualifications and certifications taken" />
            </Box>
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="20px"
            >
                
            <Box
                gridColumn={{xs: "span 12", sm: "span 12", md: "span 8"}}
                m="20px"
             >
                <Box
                alighItems="center"
                display="block"
                justifyContent="center"
                >
                <Typography variant="h2" p="10px 0 0 0">
                    {datas.educations[0].schoolName}
                </Typography>
               
                <Typography variant="h3" p="10px 0 10px 0 ">
                    {datas.educations[0].major}, ({datas.educations[0].honor})
                </Typography>
                <Box
            backgroundColor={colors.purpleAccent[400]}
            overflow="auto"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                colors={colors.gray[100]}
                p="15px"
                >
                    <Typography
                    color={colors.purpleAccent[800]}
                    variant="h5"
                    fontWeight="600">
                        Courses Taken
                    </Typography>
                </Box>
                {datas.educations[0].courses.map((c) => {
                    return (
                        <Box
                        key={c.id}
                        display={{xs: "block", sm: "flex", md: "flex"}}
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                        p="15px">
                            <Box>
                            <Typography
                                color={colors.gray[100]}
                                fontWeight="600">
                                    {c.name}
                            </Typography>
                            </Box>
                            <Box>
                                <Typography
                                color={colors.tealAccent[200]}
                                variant="h6"
                                fontWeight="600">
                                    {c.name2}
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}


            </Box>
                </Box>
               
            </Box>
            <Box 
            gridColumn={{xs: "none", sm: "none", md: "span 4"}}
            display={{xs: "none", sm: "none", md: "flex"}}>
            <CardMedia
                component="img"
                sx={{ width: "50%", m: 10}}
                image={datas.educations[0].educationImage}
                alt="Live from space album cover"
            />
            </Box>
            <Box 
            gridColumn={{xs: "none", sm: "none", md: "span 4"}}
            display={{xs: "none", sm: "none", md: "flex"}}
            >
            <CardMedia
                component="img"
                sx={{ width: "50%", m: 10}}
                image={datas.educations[1].educationImage}
                alt="Live from space album cover"
            />
            </Box>
            <Box
                gridColumn={{xs: "span 12", sm: "span 12", md: "span 8"}}
                m="20px"
             >
                 <Box
                alighItems="center"
                display="block"
                justifyContent="center"
                >
                
                <Typography variant="h2" p="10px 0 0 0">
                    {datas.educations[1].schoolName}
                </Typography>
               
                <Typography variant="h3" p="10px 0 10px 0">
                    {datas.educations[1].major}, ({datas.educations[1].honor})
                </Typography>
                <Box
            backgroundColor={colors.purpleAccent[400]}
            overflow="auto"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                colors={colors.gray[100]}
                p="15px"
                >
                    <Typography
                    color={colors.purpleAccent[800]}
                    variant="h5"
                    fontWeight="600">
                        Courses Taken
                    </Typography>
                </Box>
                {datas.educations[1].courses.map((c) => {
                    return (
                        <Box
                        key={c.id}
                        display={{xs: "block", sm: "flex", md: "flex"}}
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                        p="15px">
                            <Box>
                            <Typography
                                color={colors.gray[100]}
                                fontWeight="600">
                                    {c.name}
                            </Typography>
                            </Box>
                            <Box>
                                <Typography
                                color={colors.tealAccent[200]}
                                variant="h6"
                                fontWeight="600">
                                    {c.name2}
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
                </Box>
            </Box>
            <Box
                gridColumn={{xs: "span 12", sm: "span 12", md: "span 8"}}
                m="20px"
             >
                <Box
                alighItems="center"
                display="block"
                justifyContent="center"
                >
                <Typography variant="h2" p="10px 0 0 0">
                    {datas.educations[2].schoolName}
                </Typography>
               
                <Typography variant="h3" p="10px 0 10px 0">
                    {datas.educations[2].major}, ({datas.educations[2].honor})
                </Typography>
                <Box
            backgroundColor={colors.purpleAccent[400]}
            overflow="auto"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                colors={colors.gray[100]}
                p="15px"
                >
                    <Typography
                    color={colors.purpleAccent[800]}
                    variant="h5"
                    fontWeight="600">
                        Courses Taken
                    </Typography>
                </Box>
                {datas.educations[2].courses.map((c) => {
                    return (
                        <Box
                        key={c.id}
                        display={{xs: "block", sm: "flex", md: "flex"}}
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                        p="15px">
                            <Box>
                            <Typography
                                color={colors.gray[100]}
                                fontWeight="600">
                                    {c.name}
                            </Typography>
                            </Box>
                            <Box>
                                <Typography
                                color={colors.tealAccent[200]}
                                variant="h6"
                                fontWeight="600">
                                    {c.name2}
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}


            </Box>
                </Box>
            </Box>
            <Box 
            gridColumn={{xs: "none", sm: "none", md: "span 4"}}
            display={{xs: "none", sm: "none", md: "flex"}}>
            <CardMedia
                component="img"
                sx={{ width: "50%", m: 10}}
                image={datas.educations[2].educationImage}
                alt="Live from space album cover"
            />
            </Box>
            <Box gridColumn={{xs: "none", sm: "none", md: "span 4"}} 
            display={{xs: "none", sm: "none", md: "flex"}}>
            <CardMedia
                component="img"
                sx={{ width: "50%", m: 10 }}
                image={datas.educations[3].educationImage}
                alt="Live from space album cover"
            />
            </Box>
            <Box
                gridColumn={{xs: "span 12", sm: "span 12", md: "span 8"}}
                m="20px"
             >
                
                <Box
                alighItems="center"
                display="block"
                justifyContent="center"
                >
                <Typography variant="h2" p="10px 0 0 0">
                    {datas.educations[3].schoolName}
                </Typography>
               
                <Typography variant="h3" p="10px 0 10px 0">
                    {datas.educations[3].major}, ({datas.educations[3].honor})
                </Typography>
                <Box
            backgroundColor={colors.purpleAccent[400]}
            overflow="auto"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                colors={colors.gray[100]}
                p="15px"
                >
                    <Typography
                    color={colors.purpleAccent[800]}
                    variant="h5"
                    fontWeight="600">
                        Courses Taken
                    </Typography>
                </Box>
                {datas.educations[3].courses.map((c) => {
                    return (
                        <Box
                        key={c.id}
                        display={{xs: "block", sm: "flex", md: "flex"}}
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`2px solid ${colors.purpleAccent[500]}`}
                        p="15px">
                            <Box>
                            <Typography
                                color={colors.gray[100]}
                                fontWeight="600">
                                    {c.name}
                            </Typography>
                            </Box>
                            <Box>
                                <Typography
                                color={colors.tealAccent[200]}
                                variant="h6"
                                fontWeight="600">
                                    {c.name2}
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
               </Box>
            </Box>
            </Box>
            </Box>
    )}

export default Education