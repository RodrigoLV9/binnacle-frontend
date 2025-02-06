import React, {useState, createContext, useContext, ReactNode} from 'react'

interface UserValue{
    username:string | undefined,
    email:string
}
interface ContextValue{
    user:UserValue | undefined,
    setUser:React.Dispatch<React.SetStateAction<UserValue | undefined>>
}
const MyContext=createContext<ContextValue | undefined>(undefined)
export const UserContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [user,setUser]=useState<UserValue | undefined>(/* {username:'Rodrigo',email:'rodrigolv.975@gmail.com'} */undefined)
  return (
    <MyContext.Provider value={{user,setUser}}>
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
