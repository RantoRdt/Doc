import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { interactionsCode } from "../../../helper/codes";

const ChildToParent = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.interaction]
    return <Stack id={siblings[0]} spacing={1}>
        <Typography variant="h5">Composant enfant vers composant parent</Typography>
        <Stack>
            <Typography variant="h6">Sans donnée à envoyer</Typography>
            <Typography>La communication se fait par l'émission d'un évènement personnalisé (dont la valeur est une fonction) que le composant parent pourra capter de la même manière que l'on peut capter les évenements des éléments prédéfinis, par exemple, le onClick d'un boutton.</Typography>
            <CodeSnippet>{interactionsCode.ctp1}</CodeSnippet>
            <CodeSnippet>{interactionsCode.ctp2}</CodeSnippet>
        </Stack>
        <Stack>
            <Typography variant="h6">Avec donnée(s) envoyée(s)</Typography>
            <Typography>Les données sont passées en paramètre de la fonction émise et récupérées de cette façon dans le composant parent</Typography>
            <CodeSnippet>{interactionsCode.ctp3}</CodeSnippet>
            <CodeSnippet>{interactionsCode.ctp4}</CodeSnippet>
        </Stack>
    </Stack>
}

export default ChildToParent