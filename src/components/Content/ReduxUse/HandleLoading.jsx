import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { reduxUseCode } from "../../../helper/codes";

const HandleLoading = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.reduxUse]
    return <Stack id={siblings[2]} spacing={1}>
        <Typography variant="h5">Utilisation avec gestion du chargement</Typography>
        <CodeSnippet>{reduxUseCode.actions2}</CodeSnippet>
        <CodeSnippet>{reduxUseCode.reducer2}</CodeSnippet>
    </Stack>
}

export default HandleLoading