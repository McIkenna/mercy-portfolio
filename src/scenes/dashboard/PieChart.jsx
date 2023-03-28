import { Box } from "@mui/system";
import Header from "../../components/Header";
import Pie from "../../components/utils/Pie";

const PieChart =() => {
    return(
        <Box m="20px">
            <Header title="Skills" subtitle="" />
            <Box height="75vh">
                <Pie isDashboard={false}/>
            </Box>
        </Box>
    )
}
export default PieChart