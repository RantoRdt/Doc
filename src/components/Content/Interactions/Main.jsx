import { Stack, Typography } from "@mui/material";
import React from "react";
import ParentToChild from "./ParentToChild";
import ChildToParent from "./ChildToParent";

const Interaction = () =>{
    return <Stack spacing={3}>
        <Typography variant="h4">Communication entre composant parent / enfant</Typography>
        <ChildToParent/>
        <ParentToChild/>
    </Stack>
}

export default Interaction