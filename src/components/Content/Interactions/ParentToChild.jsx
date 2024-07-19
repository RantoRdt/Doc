import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { interactionsCode } from "../../../helper/codes";

const ParentToChild = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.interaction]
    return <Stack id={siblings[1]} spacing={1}>
        <Typography variant="h5">Composant parent vers composant enfant</Typography>
        <Typography>Le changement de valeur d'un state peut être capté dans tous les composants enfants où il sera transmis.</Typography>
        <CodeSnippet>{interactionsCode.ptc1}</CodeSnippet>
        <CodeSnippet>{interactionsCode.ptc2}</CodeSnippet>
    </Stack>
}

export default ParentToChild