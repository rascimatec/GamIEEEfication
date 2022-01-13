import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faCoins, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../../contexts/auth';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name: string | undefined,
    level: number | undefined,
    coins: number | undefined,
    xp: number | undefined,
    descricao: string | undefined,
    capitulo: string | undefined
 }

const AdmHeader: React.FC<Props> = ({name, level, coins}) => {
    const { signOut, user } = useAuth();
    const navigation = useNavigation();

    function handleSignOut() {
        signOut();
    }
    return (
        <View style = {styles.topNav}>
            <View style = {styles.infoTopNav}>
                <TouchableOpacity style = {styles.topTabProfileContent} onPress = {() => navigation.navigate('ProfileScreen')}>
                    <View style = {styles.topTabProfileContent}>
                        <FontAwesomeIcon icon = {faUser} size={24} />
                        <View style = {styles.profileSubTabContent}>
                            <Text>{name}</Text>
                            <Text>LVL {level}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.topTabCoinContent} onPress = {() => navigation.navigate('Store')}>
                <View style={styles.topTabCoinContent}>
                    <FontAwesomeIcon icon={faCoins} size={24} />
                    <View style = {styles.coinSubTabContent}>
                        <Text>{coins} IC</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.adminMenu} onPress={() => navigation.navigate('AdminPanel')}>
                    <View>
                            <FontAwesomeIcon icon={faShieldAlt} size={24} />
                    </View>
                </TouchableOpacity>
                <View style = {styles.signOutButton}>
                    <TouchableOpacity style = {styles.signOutButton} onPress={handleSignOut}><Text>Sair</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default AdmHeader;