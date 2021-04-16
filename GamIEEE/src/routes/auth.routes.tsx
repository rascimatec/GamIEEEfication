import React from 'react'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Forgot from '../pages/Forgot'

import {createStackNavigator} from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    
    <AuthStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <AuthStack.Screen name ="SignIn" component = {SignIn} />
        <AuthStack.Screen name ="SignUp" component = {SignUp} />
        <AuthStack.Screen name ="Forgot" component = {Forgot} />
    </AuthStack.Navigator>
);

export default AuthRoutes;