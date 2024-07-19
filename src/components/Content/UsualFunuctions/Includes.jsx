import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { usualFunctionsCode } from "../../../helper/codes";

const Includes = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.usualFunctions]
    return <Stack id={siblings[1]} spacing={1}>
        <Typography variant="h5">Includes</Typography>

        <Stack>
            <Typography variant="h6">Appliquer à un tableau</Typography>
            <Typography>Recherche si un tableau contient un élément (peu importe le type) donné.</Typography>
            <CodeSnippet>{usualFunctionsCode.inc2}</CodeSnippet>
        </Stack>

        <Stack>
            <Typography variant="h6">Appliquer à une chaîne de caractère</Typography>
            <Typography>Recherche si une chaîne de caractère contient un caractère donné. Ceci est utile dans les filtres relatifs aux recherches</Typography>
            <CodeSnippet>{usualFunctionsCode.inc1}</CodeSnippet>
        </Stack>
    </Stack>
}

export default Includes