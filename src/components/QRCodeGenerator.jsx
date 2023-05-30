import React, { useState } from 'react';
import {QRCodeCanvas} from 'qrcode.react';
import { tokens } from "../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { CssTextField } from '../scenes/profile-forms/textfield';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <QRCodeCanvas size={300} level='M' includeMargin={true} sx={{color:colors.grey[100]}} value={text} />
      <h1>&nbsp; </h1>
      <CssTextField fullWidth helperText="Please enter a link" value={text} onChange={handleInputChange} />
    </div>
  );
};

export default QRCodeGenerator;
