import React from 'react'
import BaseContext from './ContextCreator'

const ContextProvider = ({children}) => {
    const title = "Open Project";
  return (
    <BaseContext.Provider value={{title}}>
        {children}
    </BaseContext.Provider>
  )
}

export default ContextProvider