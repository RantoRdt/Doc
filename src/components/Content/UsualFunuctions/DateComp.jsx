import { Stack, Typography, Alert } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { usualFunctionsCode } from "../../../helper/codes";
import HighlightedText from "../../tools/HighlightedText";
import Link from "../../tools/Link";
import { momentLink } from "../../../helper/links";

const DateComp = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.usualFunctions]
    return <Stack id={siblings[0]} spacing={1}>
        <Typography variant="h5">Comparaison de dates</Typography>
        <Alert severity="info">
            <Typography>Pour manipuler les dates, nous utiliserons une librairie appelé <HighlightedText>moment.js</HighlightedText></Typography>
            <Link to={momentLink}>Voir la documentation</Link>
        </Alert>
        <Typography>
            Les opérateurs de comparaison de date sont les opérateurs de comparaison classiques: {'<'}, {'<='}, {'>'}, {'>='}, == et !=
        </Typography>
        <Stack>
            <Typography>Une date plus récente qu'une autre sera supérieure à cette dernière et une date plus ancienne sera inférieure.</Typography>
            <Typography>
                En d'autres termes, une date d1 est antérieure à une date d2 (ou d1 est plus ancien que d2) si d1 {'<'} d2. À l'inverse, d1 est postérieure à d2 (ou d1 est plus récent que d2)  si d1 {'>'} d2
            </Typography>
        </Stack>
        <CodeSnippet>{usualFunctionsCode.dm2}</CodeSnippet>
    </Stack>
}

export default DateComp