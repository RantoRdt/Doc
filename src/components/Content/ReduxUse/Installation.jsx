import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { reduxUseCode } from "../../../helper/codes";
import Link from "../../tools/Link";
import { reduxLink } from "../../../helper/links";

const Installation = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.reduxUse]
    return <Stack id={siblings[0]}>
        <Typography variant="h5">Installation</Typography>
        <CodeSnippet>{reduxUseCode.inst}</CodeSnippet>
        <Link to={reduxLink}>Documentation complète</Link>
    </Stack>
}

export default Installation