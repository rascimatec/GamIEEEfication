import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

import Footer from '../../../components/footer'
import Header from '../../../components/header'
import UncompletedTask from '../../../components/uncompletedTask'

const ActiveTasks: React.FC = () => {
    return (
        <View style={styles.body}>
            <Header/>
            <View style={styles.content}>
                <View style={styles.h1Inline}><Text style={styles.h1Inline}>Confirmações</Text></View>
                <ScrollView style={styles.scrollContent}>
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                    <UncompletedTask />
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
};

export default ActiveTasks;