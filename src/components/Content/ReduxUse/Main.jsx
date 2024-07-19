import { Stack, Typography } from "@mui/material";
import React from "react";
import Installation from "./Installation";
import GetStarted from "./GetStarted";
import HandleLoading from "./HandleLoading";

const ReduxUse = () =>{
    return <Stack spacing={3}>
        <Typography variant="h4">Utilisation de Redux</Typography>
        <Installation/>
        <GetStarted/>
        <HandleLoading/>
    </Stack>
}

export default ReduxUse