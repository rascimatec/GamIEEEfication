import React from 'react';
import { View } from 'react-native';

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