import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth  from '../services/auth'
import api from '../services/api'
import { InteractionManager, PanResponder } from 'react-native'
import { AxiosPromise } from 'axios'

interface User {
    name: string,
    level: number,
    chapter: string,
    coins: number,
    pendingTask: object,
    completedTasks: object,
    friendList: object,
    badges: object,
    xp: number,
    member: boolean,
    admin: boolean
}

interface AuthContextData {
    isSigned: boolean;
    user: User | null;
    signIn(username: string, password: string): Promise<any>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [isSigned, setSigned] = useState(false)

    useEffect( () => {
        async function loadStoragedData () {
            const storagedToken = await AsyncStorage.getItem('@Gamieeefication:token');

            if (storagedToken)
            {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                
                setSigned(true);
            }
        }

        loadStoragedData();
    }, [])
    
    async function signIn(user:string, password:string) {
        const response = await auth.signIn(user, password);
        
        const { token, signed } = response;

        setSigned(signed);

        if(signed) {
            api.defaults.headers['x-access-token'] = `${token}`;

            await AsyncStorage.setItem('@Gamieeefication:token', token);
        }
    }
    
    //JWT (Stateless)
    
    function signOut() {
        AsyncStorage.clear().then(() => {
            setSigned(false)
        });
    }


    return (
    <AuthContext.Provider value = {{isSigned, user, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
    )
    
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}