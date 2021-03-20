import React from 'react'
import Dashboard from '../pages/Dashboard'
import ProfileScreen from  '../pages/ProfileScreen'
import Help from  '../pages/Help'
import Tasks from  '../pages/Tasks'
import Friends from  '../pages/Friends'
import Store from  '../pages/Store'
import AdminPanel from  '../pages/AdminPanel'
import ActiveTasks from  '../pages/AdminPanel/ActiveTasks'
import Confirmation from  '../pages/AdminPanel/Confirmation'
import {createStackNavigator} from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <AuthStack.Screen name ="Dashboard" component = {Dashboard} />
        <AuthStack.Screen name = "ProfileScreen" component = {ProfileScreen} />
        <AuthStack.Screen name = "Store" component = {Store} />
        <AuthStack.Screen name = "Help" component = {Help} />
        <AuthStack.Screen name = "Tasks" component = {Tasks} />
        <AuthStack.Screen name = "Friends" component = {Friends} />
        <AuthStack.Screen name = "AdminPanel" component = {AdminPanel} />
        <AuthStack.Screen name = "Confirmation" component = {Confirmation} />
        <AuthStack.Screen name = "ActiveTasks" component = {ActiveTasks} />
    </AuthStack.Navigator>
);

export default AppRoutes;