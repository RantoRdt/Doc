import { Stack, Typography } from "@mui/material";
import React from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { listFilterCode } from "../../../helper/codes";

const ListFilter = () =>{
    return <Stack spacing={3}>
        <Typography variant="h4">Filtre de liste</Typography>
        <Stack>
            <Typography variant="h6">Forme générale</Typography>
            <CodeSnippet>{listFilterCode.lf1}</CodeSnippet>
            <Typography>L'item sera sélectionné dans la liste filtrée si l'expression booléenne retourne true</Typography>
        </Stack>
        <Stack>
            <CodeSnippet>{listFilterCode.lf2}</CodeSnippet>
            <Typography>notGreenFruits contient la liste des fruits de couleur autre que verte</Typography>
        </Stack>
        <Stack>
            <CodeSnippet>{listFilterCode.lf3}</CodeSnippet>
            <Typography>goodGreenFruitsStartingWithPe contient la liste des fruits de couleur verte, notés 6 ou mieux, dont le nom commence par Pe</Typography>
        </Stack>
    </Stack>
}

export default ListFilter