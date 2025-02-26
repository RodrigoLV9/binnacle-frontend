import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
interface User {
  username: string;
  email: string;
  idUser:string
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
  getRefreshToken: () => string | undefined;
  logout:()=>void
}

const MyAuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { setUser } = useUser();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(undefined);

  const logout=()=>{
    setUser(undefined)
    setAccessToken(undefined)
    setRefreshToken(undefined)
    setIsAuth(false)
    localStorage.removeItem("refreshToken")
  }
  const getAccessToken = () => {
    return accessToken;
  };

  const getRefreshToken = () => {
    return localStorage.getItem("refreshToken") || undefined;
  };

  const saveUser = (userData: AuthResponse) => {
    setUser(userData.user);
    setAccessToken(userData.accessToken);
    setRefreshToken(userData.refreshToken);
    localStorage.setItem("refreshToken", userData.refreshToken);
    setIsAuth(true);
  };
  useEffect(() => {
    checkAuth();
  }, []);
  const requestNewAccessToken = async () => {
    const token=getRefreshToken()
    try {
      const response = await fetch('http://localhost:3000/api/refresh-token', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        } else {
          return data.accessToken;
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const getUserInfo = async (accessToken: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        } else {
          return data;
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const checkAuth = async () => {
    if (accessToken) {
      console.log("Correct")
    } else {
      const token = getRefreshToken();
      if (token) {
        const newAccessToken = await requestNewAccessToken();
        if (newAccessToken) {
          const userInfo = await getUserInfo(newAccessToken);
          if (userInfo) {
            setUser(userInfo.body);
            setAccessToken(newAccessToken);
            setIsAuth(true);
          }
        }
      }
    }
  };

  return (
    <MyAuthContext.Provider value={{ isAuth, getAccessToken, saveUser, getRefreshToken,logout}}>
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