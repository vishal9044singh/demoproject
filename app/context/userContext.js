import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children }
        </UserContext.Provider>
    );
};