import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../../themes";
import { useTheme } from "@mui/material";
import data from "../../data/profileData.json";

const Pie = ({ isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsivePie
      data={data.skills}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.gray[100],
            },
          },
          legend: {
            text: {
              fill: colors.gray[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.gray[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.gray[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.gray[100],
          },
        },
        tooltip:{
          container:{
            background: colors.gray[100]
          }
        }
      }}
      tooltip={({ datum: { id, label } }) => (
        <div
            style={{
                padding: 5,
                color: "black",
                background: colors.gray[100],
                fontFamily: "sans-serif"
            }}
        >
            <strong>
                {id}: {label}
            </strong>
        </div>
    )}
    margin={{ top: 40, right: 90, bottom: 90, left: 90 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={colors.purpleAccent[700]}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.gray[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={colors.purpleAccent[700]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
     legends={
      isDashboard ? [] : [
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: -150,
          translateY: 50,
          itemsSpacing: 20,
          itemWidth: 95,
          itemHeight: 18,
          itemTextColor: colors.purpleAccent[800],
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Pie;