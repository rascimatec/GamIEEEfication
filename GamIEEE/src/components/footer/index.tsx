import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUsers, faQuestion, faTasks } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Footer: React.FC = () => {
    const navigation = useNavigation();

    return (
    <View style = {styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Help')} style = {styles.bottomTabContainer}><View><FontAwesomeIcon icon = {faQuestion} size={ 24 }  /></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tasks')} style = {styles.bottomTabContainer}><View><FontAwesomeIcon icon = {faTasks} size={ 24 }  /></View></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')} style = {styles.bottomTabContainer}><View><FontAwesomeIcon icon = {faUsers} size={ 24 }  /></View></TouchableOpacity>
    </View>
    )    
};

export default Footer;