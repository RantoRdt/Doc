import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CodeSnippet from "../../tools/CodeSnippet";
import { PageStateContext } from "../../../pageState";
import { multiLanguageCode } from "../../../helper/codes";
import DirectoryTree from "../../tools/DirectoryTree";

const TextTrads = () =>{
    const { pageStatesList, childrenPageStatesList } = useContext(PageStateContext)
    const siblings = childrenPageStatesList[pageStatesList.multiLanguage]
    return <Stack id={siblings[0]} spacing={1}>
        <Typography variant="h5">1 - Mise en place des traductions de texte</Typography>
        <Stack>
            <Typography>Beaucoup d'architectures de dossiers peuvent être adoptées, elle n'a aucun impact sur la fonctionnalité. On va prendre la suivant en guise d'exemple</Typography>
            <DirectoryTree data={{
                root: 'src',
                children: [
                    {
                        name: "components",
                        children: [{name: "Language", children: [{name: "LanguageSwitcher.jsx"}]}],
                    },
                    {
                        name: "helper",
                        children: [{ name: "texts.js" }]
                    },
                    {
                        name: "hooks",
                        children: [{name: "useLanguage.jsx"}]
                    },    
                    { name: "App.css" },         
                    { name: "App.js" },         
                    { name: "index.js" },         
                ]
            }}/>
            <Typography>useLanguage.jsx est un hook personnalisé qui permettra de gérer le changement de langue et de fournir les textes correspondant à la langue courante (Cf paragraphe 2). LanguageSwitcher.jsx est un composant rendant l'interface de changement de langue (Cf paragraphe 3).</Typography>
        </Stack>
        <Stack>
            <Typography>texts.js englobe la liste des textes dans l'application pour toutes les langues.</Typography>
            <CodeSnippet>{multiLanguageCode.ml1}</CodeSnippet>
        </Stack>
    </Stack>
}

export default TextTrads