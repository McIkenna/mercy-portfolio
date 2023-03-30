import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Pie from "../../components/utils/Pie";

const PieChart =() => {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 1030) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
    })
    return(
        <Box m="20px">
            <Header title="Skills" subtitle="" />
            <Box height="75vh">
                <Pie isDashboard={false} isMobile={isMobile}/>
            </Box>
        </Box>
    )
}
export default PieChart