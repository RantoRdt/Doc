import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { PageStateContext } from "../../pageState";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

const Nav = () =>{
    const { changePage, pageStatesList, childrenPageStatesList } = useContext(PageStateContext)

    const getParent = s =>{
        for (const key in childrenPageStatesList)
            if (childrenPageStatesList[key]?.includes(s)) return key

    }

    const handleNav = async newState =>{
        if (Object.values(pageStatesList).includes(newState)) changePage(newState)
        else{
            const parent = getParent(newState)
            if (parent) await changePage(parent)
            document.getElementById(newState)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(<>
        <Box component="img" src="/logo.png" sx={{ height: "50px", width: "50px", margin: "10px 5px" }}/>
        <SimpleTreeView
            onItemFocus={(e, id) => handleNav(id)}
            defaultSelectedItems={pageStatesList.usualFunctions}
        >
            <TreeItem variant='parent' itemId={pageStatesList.usualFunctions} label={<Typography>Instructions et fonctions usuelles</Typography>}>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.usualFunctions][0]} label={<Typography>Comparaison de dates</Typography>}/>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.usualFunctions][1]} label={<Typography>Fonction includes()</Typography>}/>
            </TreeItem>
            <TreeItem variant='parent' itemId={pageStatesList.interaction} label={<Typography>Communication entre composant parent / enfant</Typography>}>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.interaction][0]} label={<Typography>De composant enfant vers parent</Typography>}/>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.interaction][1]} label={<Typography>De composant parent vers enfant</Typography>}/>
            </TreeItem>
            <TreeItem variant='parent' itemId={pageStatesList.listFilter} label={<Typography>Filtre de liste</Typography>}>
            </TreeItem>
            <TreeItem variant='parent' itemId={pageStatesList.multiLanguage} label={<Typography>Translation (Application multilingue)</Typography>}>
            <TreeItem itemId={childrenPageStatesList[pageStatesList.multiLanguage][0]} label={<Typography>1 - Mise en place des traductions de texte</Typography>}/>
            <TreeItem itemId={childrenPageStatesList[pageStatesList.multiLanguage][1]} label={<Typography>2 - Création d'un hook gérant la langue</Typography>}/>
            <TreeItem itemId={childrenPageStatesList[pageStatesList.multiLanguage][2]} label={<Typography>3 - Création d'un language switcher</Typography>}/>
            </TreeItem>
            <TreeItem variant='parent' itemId={pageStatesList.reduxUse} label={<Typography>Utilisation de redux</Typography>}>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.reduxUse][0]} label={<Typography>Installation</Typography>}/>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.reduxUse][1]} label={<Typography>Commencer</Typography>}/>
                <TreeItem itemId={childrenPageStatesList[pageStatesList.reduxUse][2]} label={<Typography>Gérer le chargement et le feedback négatif</Typography>}/>
            </TreeItem>
        </SimpleTreeView>
    </>)
}

export default Nav