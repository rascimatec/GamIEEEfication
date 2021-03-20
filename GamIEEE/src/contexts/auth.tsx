import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth  from '../services/auth'
import api from '../services/api'

interface User {
    name: string,
    email: string,
    admin: boolean
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function loadStoragedData () {
            const storagedUser = await AsyncStorage.getItem('@AppName:user');
            const storagedToken = await AsyncStorage.getItem('@AppName:token');

            if (storagedUser && storagedToken)
            {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }

        loadStoragedData();
    }, [])
    
    async function signIn() {
        const response = await auth.signIn();

        const { token, user } = response;

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@AppName:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@AppName:token', response.token);
    }
    
    //JWT (Stateless)
    
    function  signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        });
    }


    return (
    <AuthContext.Provider value = {{signed: !!user, user, signIn, signOut, loading}}>
        {children}
    </AuthContext.Provider>
    )
    
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}