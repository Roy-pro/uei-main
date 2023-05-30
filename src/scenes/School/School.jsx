import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import Table from "../../components/Table";
import "../../components/Table.css";
import { useContext } from "react";
import { userContext } from "../../App";

const School = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classNames = 'overflow-y-scroll element-class max-h-[88%] scrollbar-hide'
  const { student } = useContext(userContext);
  return (
    <div className={classNames}>
      <div className='m-2 m-30'><Header title="SCHOOL DETAILS" subtitle={`View ${student.name}'s school details!`} H={"h2"}/></div>
      <Box
        display="grid"
        m = "30px 30px"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="flex"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p = "30px 0"
        >
          <StatBox
            isReq={false}
            title="Current School "
            subtitle="Bharatiya Vidya Bhavan's B. P. Vidya Mandir, Civil Lines"
          />
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p = "30px 0"
        >
          <StatBox
            isReq={false}
            title="Current Year"
            subtitle="12th Standard"
            subsubtitle="PCM"
          />
          
        </Box>
        
        
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p = "30px 0"
        >
          <StatBox
            isReq={false}
            title="Marks"
            subtitle="478"
            subsubtitle="(Out of 500)"
            progress="0.30"
            // increase="+5%"
            />
          <StatBox
            isReq={false}
            title="Percentage"
            subtitle="95.6%"
            subsubtitle="Grade A+"
            progress="0.30"
            // increase="+5%"
          />
          <StatBox
            isReq={false}
            title="Class Rank"
            subtitle="5"
            subsubtitle="In Class of 45"
            progress="0.30"
            // increase="+5%"
          />
        </Box>
        {/* <Box
        gridColumn="span 12"
        backgroundColor={colors.primary[400]}>
          <DisplayBox
            title="Class 1"
            subtitle="91%"
            progress="0.91"/>
        </Box> */}
      </Box>
      <Box
        display="grid"
        m = "30px 30px"
        gridTemplateColumns="repeat(12, flex)"
        gridAutoRows="flex"
        gap="20px"
      >
      <Table />
      </Box>
    </div>
  );
};

export default School;