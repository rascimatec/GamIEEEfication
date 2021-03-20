import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../contexts/auth';
import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'
import InProgress from '../../components/inProgress'

const Friends: React.FC = () => {
return (
    <View style = {styles.body}>
        <Header/>
            <InProgress/>
        <Footer/>
    </View>
)};

export default Friends;