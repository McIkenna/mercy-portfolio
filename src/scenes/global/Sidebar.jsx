import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../themes";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HubIcon from '@mui/icons-material/Hub';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
        active={selected === title} 
        style={{color: colors.gray[100]}}
        onClick={() => setSelected(title)}
        icon={icon}
        >
        <Typography>{title}</Typography>
        <Link to={to} />
        </MenuItem>
    )
}
const Sidebar=()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }

        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon />: undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.gray[200]
                    }}>
                        {!isCollapsed && (
                            <Box display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px">
                            <Typography></Typography>
                            <IconButton 
                                onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>  
                        )}
                    </MenuItem>
            {/* USER */}
            {!isCollapsed && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignitems="center">
                        <img 
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../assets/mercySmile.jpeg`}
                        style={{ cursor: "pointer", borderRadius: "50%"}}/>

                    </Box>

                    <Box textAlign="center">
                    <Typography variant="h3" color={colors.tealAccent[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Mercy Okonna</Typography>
                    <Typography variant="h6" color={colors.gray[400]}> Data Scientist, Machine Learning & AI Enthusiast</Typography>
                    </Box>
                </Box>
                
            )}
            {/* Menu ITEMS */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                title = "Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "Education"
                to="/education"
                icon={<SchoolOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "Work"
                to="/work"
                icon={<CasesOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "Project"
                to="/project"
                icon={<AccountTreeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "Publication"
                to="/publication"
                icon={<HistoryEduIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "Skill"
                to="/skill"
                icon={<DesignServicesOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                 <Item
                title = "Calender"
                to="/calender"
                icon={<CalendarMonthOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography>
                    Charts
                    <Item
                title = "PieChart"
                to="/piechart"
                icon={<PieChartOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title = "FunnelChart"
                to="/funnelchart"
                icon={<FilterAltIcon />}
                selected={selected}
                setSelected={setSelected}
                />
                {/* <Item
                title = "netChart"
                to="/netchart"
                icon={<HubIcon />}
                selected={selected}
                setSelected={setSelected}
                />*/}
                </Typography> 
            </Box>

            </Menu>
            </ProSidebar>
        </Box>
    )
}
export default Sidebar