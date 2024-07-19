import React from "react";
import { Link as L, Typography } from "@mui/material"

const Link = ({children, to}) =>{
    return <L onClick= {() => window.open(to, '_blank')} underline="hover"><Typography color="primary">{children}</Typography></L>
}

export default Link