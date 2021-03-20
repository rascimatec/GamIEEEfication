import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../../contexts/auth';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const UserHeader: React.FC = () => {
    const { signOut, user } = useAuth();
    const navigation = useNavigation();

    function handleSignOut () {
        signOut();
    }
    return (
<View style={styles.topNav}>
        <View style = {styles.infoTopNav}>
            <TouchableOpacity style = {styles.topTabProfileContent} onPress={() => navigation.navigate('ProfileScreen')}>
                <View style = {styles.topTabProfileContent}>
                    <FontAwesomeIcon icon = {faUser} size={ 24 }  />
                    <View style = {styles.profileSubTabContent}>
                        <Text>{user?.name}</Text>
                        <Text>NÍVEL 50</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.topTabCoinContent} onPress={() => navigation.navigate('Store')}>
            <View style = {styles.topTabCoinContent}>
                <FontAwesomeIcon icon = {faCoins} size = { 24 }/>   
                <View style = {styles.coinSubTabContent}>
                    <Text>25 IC</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
        <View style = {styles.signOutButton}>
            <TouchableOpacity style = {styles.signOutButton} onPress={handleSignOut}><Text>Sair</Text></TouchableOpacity>
        </View>
    </View>
    )};

export default UserHeader;