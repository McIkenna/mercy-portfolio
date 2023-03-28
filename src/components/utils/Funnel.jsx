import { colors } from '@mui/material'
import { ResponsiveFunnel } from '@nivo/funnel'
import data from '../../data/profileData.json'
import { tokens } from "../../themes";
import { useTheme } from "@mui/material";

const Funnel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  
   return( <ResponsiveFunnel
        data={data.workExperience}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        enableLabel={true}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        valueFormat={(val) => {
            switch(val){
                case 54330:
                    return `${"COMARC (Data Analyst)"}`
                case 43000:
                    return `${"GEORGIA SOUTHERN UNIVERSITY (Machine Learning & AI Research Assistant)"}`
                case 34000:
                    return `${"OAK ROOT HIGH SCHOOL (Mathematics Instructor)"}`
                default:
                    return `${"DISCOVER FINANCIAL SERVICES (Senior Data Science Analyst)"}`
            }
        }
        }
        tooltip={({ part }) => (
            <div
                style={{
                    padding: 12,
                    color: colors.purpleAccent[700],
                    background: colors.tealAccent[100],
                }}
            >
                <strong>
                    {part.data.label}: {part.data.jobTitle}
                </strong>
                <p>
                    {part.data.jobDescription}
                </p>
            </div>
        )}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
)}

export default Funnel
