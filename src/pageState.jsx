import React, { createContext, useState } from 'react';

const PageStateContext = createContext(false);

const PageStateProvider = ({children}) => {
    const list= { usualFunctions: 'uf', interaction: 'i', listFilter: 'lf', multiLanguage: 'ml', reduxUse: 'redux' }
    const childrenList= { uf: ['dc', 'inc'], i: ['ctp', 'ptc'], lf: [], ml: ['txt', 'hooks', 'swi'], redux: ['reduxinst', 'reduxgs', 'wload'] }
    const [state, setState] = useState('uf')
    return (
        <PageStateContext.Provider value={{
            pageState: state,
            pageStatesList: list,
            childrenPageStatesList: childrenList,
            changePage: setState
        }}>
            {children}
        </PageStateContext.Provider>
    )
}

export { PageStateContext, PageStateProvider }