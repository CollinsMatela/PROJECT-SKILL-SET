import { createContext, useState } from "react"

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
      
    const [userAccount, setUserAccount] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    return(
        <AuthContext.Provider value={{ userAccount, setUserAccount, userProfile, setUserProfile}}>
        {children}
        </AuthContext.Provider>
    );

};
export default AuthProvider;