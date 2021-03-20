import React from 'react'
import { View, Image, Text } from 'react-native'
import { useAuth } from '../../contexts/auth';

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const UserInfo: React.FC = () => {
    const { user } = useAuth();
    
    return (
    <View style = {styles.profileHeader}>
        <View style = {styles.profileInfoBox}>
            <View style = {styles.profilePicContainer}>
                <Image style = {styles.profilePic} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-X6d9_U1p4jgVw7CKBo2FnFRf0ifUoKhbRA&usqp=CAU'}}/>
            </View>
            <View style = {styles.profileInfo}>
                <Text style = {styles.h2}>{user?.name}</Text>
                <Text style = {styles.h2}>Nível 50</Text>
                <Text style = {styles.h2}>Voluntário</Text>
            </View>
        </View>
    </View>
    )    
};

export default UserInfo;