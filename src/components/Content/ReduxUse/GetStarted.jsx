import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageStateContext } from "../../../pageState";
import DirectoryTree from "../../tools/DirectoryTree";
import CodeSnippet from "../../tools/CodeSnippet";
import { reduxUseCode } from "../../../helper/codes";

const GetStarted = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.reduxUse]
    return <Stack id={siblings[1]} spacing={1}>
        <Typography variant="h5">Commencer</Typography>
        <Stack>
            <Typography>On va adopter cette structure pour organiser le dossier Redux</Typography>
            <DirectoryTree data={{
            root: 'Redux',
            children: [
                { name: 'actions.js' },
                { name: 'reducer.js' },
                { name: 'store.js' },
            ]
            }}/>
        </Stack>
        <Stack>
            <Typography variant="h6">Actions</Typography>
            <CodeSnippet>{reduxUseCode.actions11}</CodeSnippet>
            <CodeSnippet>{reduxUseCode.actions12}</CodeSnippet>
        </Stack>
        <Stack>
            <Typography variant="h6">Reducer</Typography>
            <CodeSnippet>{reduxUseCode.reducer1}</CodeSnippet>
        </Stack>
        <Stack>
            <Typography variant="h6">Store</Typography>
            <Typography>Le store est l'objet central de redux contenant l'état de l'application</Typography>
            <CodeSnippet>{reduxUseCode.store}</CodeSnippet>
            <Typography>Il faut envelopper le composant principal avec la balise Provider ayant comme valeur de l'attribut store celle introduite ci-dessus</Typography>
            <CodeSnippet>{reduxUseCode.store2}</CodeSnippet>
        </Stack>
        <Stack>
            <Typography variant="h6">Récupération de l'état</Typography>
            <CodeSnippet>{reduxUseCode.comp1}</CodeSnippet>
            <Typography variant="h6">Modification de l'état</Typography>
            <CodeSnippet>{reduxUseCode.comp2}</CodeSnippet>
        </Stack>
    </Stack>
}

export default GetStarted