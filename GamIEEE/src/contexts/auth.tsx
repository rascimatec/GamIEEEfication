import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth  from '../services/auth'
import api from '../services/api'
import { InteractionManager } from 'react-native'
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
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): AxiosPromise;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function loadStoragedData () {
            const storagedUser = await AsyncStorage.getItem('@Gamieeefication:user');
            const storagedToken = await AsyncStorage.getItem('@Gamieeefication:token');

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
        
        // const response = { token: '1', user: {name: 'teste',
        //     level: 10,
        //     chapter: 'teste',
        //     coins: 10,
        //     pendingTask: {},
        //     completedTasks: {},
        //     friendList: {},
        //     badges: {},
        //     xp: 10,
        //     member: false,
        //     admin: false}}

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