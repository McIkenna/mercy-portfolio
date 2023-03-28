import { Box } from "@mui/system";
import Header from "../../components/Header";
import Pie from "../../components/utils/Pie";
import NetworkChart from "../../components/utils/NetworkChart";

const PieChart =() => {
    return(
        <Box m="5px">
            <Header title="Courses Taken" subtitle="" />
            <Box height="75vh">
                {/* <Pie isDashboard={false}/> */}
                <NetworkChart 
                sizeFactor= {2.5}
                linkFactor= {2.5}
                repulsivity= {60} 
                linkWidth = {5}
                actSizeFactor={2}
                />
            </Box>
        </Box>
    )
}
export default PieChart