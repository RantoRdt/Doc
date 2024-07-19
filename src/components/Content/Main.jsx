import React, { useContext } from "react";
import { PageStateContext } from "../../pageState";
import UsualFunctions from "./UsualFunuctions/Main";
import Interactions from "./Interactions/Main";
import ListFilter from "./ListFilter/Main";
import MultiLanguage from "./MultiLanguage/Main";
import ReduxUse from "./ReduxUse/Main";

const Content = () =>{
  const { pageStatesList, pageState } = useContext(PageStateContext)
  switch (pageState){
    case pageStatesList.usualFunctions: return <UsualFunctions/>
    case pageStatesList.interaction: return <Interactions/>
    case pageStatesList.listFilter: return <ListFilter/>
    case pageStatesList.multiLanguage: return <MultiLanguage/>
    case pageStatesList.reduxUse: return <ReduxUse/>
    default: return <></>
  }
}

export default Content