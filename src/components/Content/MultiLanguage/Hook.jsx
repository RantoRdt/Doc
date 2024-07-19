import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { multiLanguageCode } from "../../../helper/codes";

const Hook = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.multiLanguage]
    return <Stack id={siblings[1]} spacing={1}>
        <Typography variant="h5">2 - Création d'un hook gérant la langue</Typography>
        <Typography>Le hook peut être créé de manière à ce que, d'une part, au changement de langue, la page se recharge; ou d'autre part, la page ne se recharge pas, offrant un aspect dynamique à l'application</Typography>
        <Stack>
            <Typography variant="h6">Avec rechargement de la page</Typography>
            <CodeSnippet>{multiLanguageCode.ml2}</CodeSnippet>
            <Typography>La fonction window.location.reload() recharge la page et la nouvelle langue est adoptée avec la valeur dans localStorage mise à jour</Typography>
        </Stack>
        <Stack>
            <Typography variant="h6">Sans rechargement de la page</Typography>
            <CodeSnippet>{multiLanguageCode.ml3}</CodeSnippet>
            <Typography>Lorsqu'un changement de langue est sollicité, la création d'un évenement octroie une mise à jour dynamique dans tous les composants utilisant le hook.</Typography>
        </Stack>
        <Stack>
            <Typography variant="h6">Résultat</Typography>
            <CodeSnippet>{multiLanguageCode.ml4}</CodeSnippet>
        </Stack>
    </Stack>
}

export default Hook