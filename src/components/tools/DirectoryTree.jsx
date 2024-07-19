import React from "react";
import { Stack, Typography } from "@mui/material"

//"│  "
const DirectoryTree = ({data={root: "", children: []}}) =>{
    const isLast = (list, item) => { return item == list[list.length - 1] }
    const getIndentation = count =>{
        let val = ''
        for (let i = 1; i <= count; i ++) val += '       '
        return val
    }
    const create = (data, indentation=0, isLastOne=false) =>{
        let finalResult = `${data.root || `${getIndentation(indentation++)}${isLastOne ?"└──" : "├──"} ${data.name}`}\n`
        data.children?.forEach(element => {
            finalResult += `${getIndentation(indentation)}${isLast(data.children, element) ?"└──" : "├──"} ${element.name}\n`
            element.children?.forEach(ec => finalResult += create(ec, indentation + 1, isLast(element.children, ec)))
        })
        return finalResult
    }
    return <Stack>
        <Typography>
            {
            create(data)
            .split(" ")
            .join('\u00A0')
            .split('\n')
            .map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </Typography>
    </Stack>
}

export default DirectoryTree