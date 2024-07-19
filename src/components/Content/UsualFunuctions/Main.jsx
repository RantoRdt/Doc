import { Stack, Typography } from "@mui/material";
import React from "react";
import DateComp from "./DateComp";
import Includes from "./Includes";

const UsualFunctions = () =>{
    return <Stack style={{ padding: '30px 0' }} spacing={3}>
        <Typography variant="h4">Instructions et fonctions usuelles</Typography>
        <DateComp/>
        <Includes/>
    </Stack>
}

export default UsualFunctions