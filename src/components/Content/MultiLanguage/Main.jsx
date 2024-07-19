import { Stack, Typography } from "@mui/material";
import React from "react";
import TextTrads from "./TextTrads";
import Hook from "./Hook";
import Switcher from "./Switcher";

const MultiLanguage = () =>{
    return <Stack spacing={3}>
        <Typography variant="h4">Translation</Typography>
        <TextTrads/>
        <Hook/>
        <Switcher/>
    </Stack>
}

export default MultiLanguage