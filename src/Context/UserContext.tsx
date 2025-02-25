import React, {useState, createContext, useContext, ReactNode} from 'react'
interface UserValue{
    username:string | undefined,
    email:string | undefined,
    idUser:string | undefined
}
interface ContextValue{
    user:UserValue | undefined,
    setUser:React.Dispatch<React.SetStateAction<UserValue | undefined>>,
    binnacle:BinnacleValue[],
    setBinnacle:(str:BinnacleValue[])=>void
}
interface BinnacleValue{
    _id:string,
    date:string,
    description:string,
    idUser:string
}
const MyContext=createContext<ContextValue | undefined>(undefined)
export const UserContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [user,setUser]=useState<UserValue | undefined>(undefined)
    const [binnacle,setBinnacle]=useState<BinnacleValue[]>([])
  return (
    <MyContext.Provider value={{user,setUser, binnacle, setBinnacle}}>
        {children}
    </MyContext.Provider>
  )
}
export const useUser=()=>{
    const context=useContext(MyContext)
    if(!context){
        throw new Error('Error in context')
    }
    return context
}
