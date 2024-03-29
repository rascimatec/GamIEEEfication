import React from 'react';
import { View, ActivityIndicator } from 'react-native'

import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
    const {isSigned} = useAuth();

    if (0) {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size = 'large' color = '#1932c0'/>
            </View>
        )
    }
    return isSigned ? <AppRoutes/> : <AuthRoutes/>
};

export default Routes;