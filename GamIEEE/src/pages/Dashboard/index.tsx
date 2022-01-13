import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

const Dashboard: React.FC = () => {

    interface User {
        chapter: string,
        coins: number,
        descricao: string,
        is_adm: number,
        level: number,
        membro: boolean,
        ramo: string,
        user_name: string,
        xp: number,
    }

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        console.log('começou')
        async function fetchMyAPI() {
            let response = await api.get('/me');
            response = await response;
            await AsyncStorage.setItem('@Gamieeefication:user', JSON.stringify(response.data[0]));
            setUser(response.data[0])
        }

        fetchMyAPI()
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.content}>
                <View>
                    <View style={styles.h1Inline}><FontAwesomeIcon style={{ color: '#FFDF00' }} icon={faCrown} size={24} /><Text style={styles.h1Inline}>Destaque do Mês</Text><FontAwesomeIcon style={{ color: '#FFDF00' }} icon={faCrown} size={24} /></View>
                    <View style={styles.firstContainer}>
                        <Text style={styles.h1r}>John Doe</Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={styles.h1}>Ranking geral</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.h2}>Ainda não há usuários!</Text>
                    </ScrollView>
                </View>
                <View style={styles.lastContainer}>
                    <Text style={styles.h1}>Próximos Eventos</Text>
                    <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
                        <Text style={styles.h2}>WorkShop Python POO - 25/10</Text>
                        <Text style={styles.h2}>Congresso - 30/12</Text>
                        <Text style={styles.h2}>Recesso - 31/12</Text>
                        <Text style={styles.h2}>WorkShop - 25/10</Text>
                        <Text style={styles.h2}>Congresso - 30/12</Text>
                        <Text style={styles.h2}>Recesso - 31/12</Text>
                        <Text style={styles.h2}>WorkShop - 25/10</Text>
                        <Text style={styles.h2}>Congresso - 30/12</Text>
                        <Text style={styles.h2}>Recesso - 31/12</Text>
                        <Text style={styles.h2}>WorkShop - 25/10</Text>
                        <Text style={styles.h2}>Congresso - 30/12</Text>
                        <Text style={styles.h2}>Recesso - 31/12</Text>
                    </ScrollView>
                </View>
            </View>
            <Footer />
        </View>
    )
};

export default Dashboard;