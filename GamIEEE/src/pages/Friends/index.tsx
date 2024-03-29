import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'
import UserInfo from '../../components/userInfo'

const Friends: React.FC = () => {

return (
    <View style = {styles.body}>
        <Header/>
            <View style = {styles.content}>
                <Text style = {styles.h1Inline}>Meus amigos</Text>
                <ScrollView style = {styles.scrollContent}>
                    <UserInfo
                    name="John Doe"
                    level={20}
                    />
                    {/* <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/>
                    <UserInfo/> */}
                </ScrollView>
            </View>
        <Footer/>
    </View>
)};

export default Friends;