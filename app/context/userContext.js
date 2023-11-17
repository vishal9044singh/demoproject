import { createContext, useState } from "react";
import LoginScreen from "../screens/LoginScreen";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    console.log('inside UserContext')

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {user ? children : <LoginScreen />}
        </UserContext.Provider>
    );
};