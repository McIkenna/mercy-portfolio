import { Box } from "@mui/system";
import Header from "../../components/Header";
import Funnel from "../../components/utils/Funnel";

const FunnelChart =() => {
    return(
        <Box m="5px">
            <Header title="Work Experiences" subtitle="" />
            <Box height="75vh">
                <Funnel />
            </Box>
        </Box>
    )
}
export default FunnelChart