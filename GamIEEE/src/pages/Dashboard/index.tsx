import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../contexts/auth';
import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'

const Dashboard: React.FC = () => {
    
    

return (
    <View style = {styles.body}>
        <Header/>
        <View style = {styles.content}>
            <View>
            <View style = {styles.h1Inline}><FontAwesomeIcon style = {{color: '#FFDF00'}} icon = {faCrown} size={ 24 }  /><Text style = {styles.h1Inline}>Destaque do Mês</Text><FontAwesomeIcon style = {{color: '#FFDF00'}} icon = {faCrown} size={ 24 }  /></View>
                <View style = {styles.firstContainer}>
                    <Text style = {styles.h1r}>John Doe</Text>
                </View>
            </View>
                    <View style = {styles.middleContainer}>
                        <Text style = {styles.h1}>Ranking geral</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style = {styles.h2}>Ainda não há usuários!</Text>
                        </ScrollView>
                </View>
                <View style = {styles.lastContainer}>
                        <Text style = {styles.h1}>Próximos Eventos</Text>
                        <ScrollView style = {styles.scrollContent} showsVerticalScrollIndicator={false}>
                            <Text style = {styles.h2}>WorkShop Python POO - 25/10</Text>
                            <Text style = {styles.h2}>Congresso - 30/12</Text>
                            <Text style = {styles.h2}>Recesso - 31/12</Text>
                            <Text style = {styles.h2}>WorkShop - 25/10</Text>
                            <Text style = {styles.h2}>Congresso - 30/12</Text>
                            <Text style = {styles.h2}>Recesso - 31/12</Text>
                            <Text style = {styles.h2}>WorkShop - 25/10</Text>
                            <Text style = {styles.h2}>Congresso - 30/12</Text>
                            <Text style = {styles.h2}>Recesso - 31/12</Text>
                            <Text style = {styles.h2}>WorkShop - 25/10</Text>
                            <Text style = {styles.h2}>Congresso - 30/12</Text>
                            <Text style = {styles.h2}>Recesso - 31/12</Text>
                        </ScrollView>
            </View>
        </View>
        <Footer/>
    </View>
)};

export default Dashboard;