import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {vscDarkPlus, oneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import React, { useContext, useState } from "react";
import { Stack, IconButton, Tooltip, Snackbar } from "@mui/material";
import { ThemeStateContext } from "../../theme/themeState";

const CodeSnippet = ({children}) =>{
    const [ hover, setHover ] = useState(false)
    const { isDark } = useContext(ThemeStateContext)
    const [ openSnackbar, setOpenSnackbar ] = useState(false)

    const copy = async ()=>{
        await navigator.clipboard.writeText(children)
        setOpenSnackbar(true)
    }
    
    return <Stack style={{position: 'relative'}} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        { hover &&
            <Tooltip title="Copier">
                <IconButton onClick={copy} style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)' }}>
                    <ContentPasteIcon/>
                </IconButton>
            </Tooltip>
         }        
        <SyntaxHighlighter language='javascript' customStyle={{ padding: '0px', paddingRight: '25px', margin: '0' }} style={isDark ? vscDarkPlus : oneLight}>{children}</SyntaxHighlighter>
        <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={()=>setOpenSnackbar(false)}
            message={'Texte copié'}
        />
    </Stack>
}
export default CodeSnippet