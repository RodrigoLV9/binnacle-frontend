import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
  email: string;
}

interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface AuthContextType {
  isAuth: boolean;
  getAccessToken: () => string | undefined;
  saveUser: (userData: AuthResponse) => void;
}

const MyAuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(undefined);

  const getAccessToken = () => {
    return accessToken;
  };

  const saveUser = (userData: AuthResponse) => {
    setAccessToken(userData.accessToken);
    setRefreshToken(userData.refreshToken);
    localStorage.setItem("token", JSON.stringify(userData.refreshToken));
    setIsAuth(true);
  };
  
  /* useEffect(()=>{

  },[]) */
  return (
    <MyAuthContext.Provider value={{ isAuth, getAccessToken, saveUser }}>
      {children}
    </MyAuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(MyAuthContext);
  if (!context) {
    throw new Error('Error in Auth Context');
  }
  return context;
};