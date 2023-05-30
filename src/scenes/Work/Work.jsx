import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CertBox from "../../components/CertBox";
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

const Work = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classNames = 'overflow-y-scroll element-class max-h-[88%] scrollbar-hide'
  const { student } = useContext(userContext);

  const { data, isLoading, error } = useSWR(`${url}/work/${student.uid}`, fetcher);

  if(isLoading){
    return (
      <div>...Loading</div>
    )
  }

  console.log(data);

  return (
    <div className={classNames}>
      <div className='m-2 m-30'><Header title="WORK AND INTERNSHIP DETAILS" subtitle={`View ${student.name}'s work and internship details!`} H={"h2"}/></div>
      <Box
        display="grid"
        m = "30px 30px"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="flex"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p = "30px 0"
        >
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
          <CertBox
            isReq={false}
            title="Introduction to HTML, CSS, and JavaScript"
            subtitle="Coursera"
            subsubtitle="September 2020 - November 2020"
            subs="Link: "
            subsubsubtitle="https://www.coursera.com"
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
      

    </div>
  );
};

export default Work;
