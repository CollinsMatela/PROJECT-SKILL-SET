import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
      
    const [userAccount, setUserAccount] = useState(null);

    return(
        <AuthContext.Provider value={{ userAccount, setUserAccount}}>
        {children}
        </AuthContext.Provider>
    );

};
export default AuthProvider;