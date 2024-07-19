import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { multiLanguageCode } from "../../../helper/codes";

const Switcher = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.multiLanguage]
    return <Stack id={siblings[2]} spacing={1}>
        <Typography variant="h5">3 - Création d'un language switcher</Typography>
        <CodeSnippet>{multiLanguageCode.ml5}</CodeSnippet>
    </Stack>
}

export default Switcher