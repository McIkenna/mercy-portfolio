import {Box, Typography, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import data from "../../data/profileData.json"
import Header from "../../components/Header";

const Skill = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id", headerName: "ID"}, 
    {field: "skillName", headerName: "Technology", flex:1}, 
    {field: "subName", headerName: "Framework or library", flex: 1}, 
    {field: "proficiency", headerName: "level", flex: 1}
];

    return (
        <Box m="20px">
            <Header title="SKILLS" subtitle="These are my proficient skillsets" />
            <Box 
            m="40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell":{
                    color: colors.tealAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.purpleAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.purpleAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.gray[100]} !important`
                }

            }}
            >
                <DataGrid rows={data.skills} columns={columns} components={{ Toolbar: GridToolbar}}/>
            </Box>
        </Box>
    )
}

export default Skill