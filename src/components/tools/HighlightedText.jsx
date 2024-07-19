import React from "react";
import { Typography } from "@mui/material";

const HighlightedText = ({children}) =>{
    return <Typography variant="highlighted">{children}</Typography>
}

export default HighlightedText