import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import Table from "../../components/TableCollege";
import LineChart from "../../components/LineChart";
import "../../components/Table.css";
import { useContext } from "react";
import { userContext } from "../../App";
import url from '../../url';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (...args) => {
  const resp = await axios.get(...args);
  return resp.data.resp;
}

const College = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classNames = 'overflow-y-scroll element-class max-h-[88%] scrollbar-hide'
  const { student } = useContext(userContext);

  const { data, isLoading, error } = useSWR(`${url}/institute/${student.uid}`, fetcher);

  if(isLoading){
    return (
      <div>...Loading</div>
    )
  }

  console.log(data);

  let agg = 0;
const l = data.instituteinfos.length; // Removed unnecessary destructuring
let ll = l; // Added missing "let" keyword
while (ll > 0) {
  const a = data.instituteinfos[ll - 1].aggregate; // Access aggregate value directly
  console.log(a, agg + parseInt(a.split(" ")[0]));
  agg = agg + parseInt(a.split(" ")[0]); // Parse the first character of the aggregate value
  ll--;
}
agg = agg/l;

console.log(agg);

  return (
    <div className={classNames}>
      <div className='m-2 m-30'><Header title="COLLEGE DETAILS" subtitle={`View ${student.name}'s certificate details!`} H={"h2"}/></div>
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
            title="College Name"
            subtitle={data.institute}
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
            subtitle={data.instituteinfos[data.instituteinfos.length-1].Class}
            subsubtitle={data.course}
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
            title="CGPA"
            subtitle={agg}
            subsubtitle=""
            progress="0.30"
            // increase="+5%"
          />
          <StatBox
            isReq={false}
            title="Backlogs"
            subtitle="None"
            subsubtitle=""
            progress="0.30"
            // increase="+5%"
          />
          <StatBox
            isReq={false}
            title="Admission Year"
            subtitle="2019"
            subsubtitle=""
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
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Student's Academic Performance
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                </Typography>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      <Box
        display="grid"
        m = "30px 30px"
        gridTemplateColumns="repeat(12, flex)"
        gridAutoRows="flex"
        gap="20px"
      >
      <Table data={data}/>
      </Box>
    </div>
  );
};

export default College;
