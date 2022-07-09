import axios from "axios";
import { FC, createContext, useState } from "react";


type TDoLoginParams = {
  email: string;
  password: string;
}
type TUserData = {
  id: string;
  name: string;
  email: string;
}
type TAuthContext = {
  isAuthenticated: boolean
  userData: TUserData
  doLogin: (data: TDoLoginParams) => Promise<boolean>
}

export const AuthContext = createContext({} as TAuthContext);
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({} as TUserData);

  async function doLogin({email, password}: TDoLoginParams) {
    const {data} = await axios.post('/api/auth', {
      email,
      password
    })

    if(data.status === 401) return false;

    setIsAuthenticated(true)
    setUserData(data)

    return true
  }

  return (
    <AuthContext.Provider value={{doLogin, isAuthenticated, userData}}>
      {children}
    </AuthContext.Provider>
  )
}