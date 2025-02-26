import React,{createContext,useContext,useState} from 'react'
interface ModeProviderValue{
    mode:boolean | undefined,
    setMode:(str:boolean | undefined)=>void,
    modalCreate:boolean| undefined,
    setModalCreate:(str:boolean | undefined)=>void
}
const ModeProvider=createContext<ModeProviderValue | undefined>(undefined)
export const ModeContext:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [mode,setMode]=useState<boolean | undefined>(undefined)
    const [modalCreate, setModalCreate]=useState<boolean | undefined>(false)
  return (
    <ModeProvider.Provider value={{mode,setMode,modalCreate,setModalCreate}}>{children}</ModeProvider.Provider>
  )
}
export const useMode=()=>{
    const context=useContext(ModeProvider)
    if(!context){
        throw new Error('Error in Mode Context')
    }
    return context
}