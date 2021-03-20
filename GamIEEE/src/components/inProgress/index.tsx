import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';

const InProgress: React.FC = () => {
    return (    
    <View style = {styles.content}>
            <View style = {styles.inProgress}>
                <Text style = {styles.maintenanceTXT}>Em desenvolvimento</Text>
                <FontAwesomeIcon icon = {faTools} size={ 150 }/>
                <Text style = {styles.maintenanceTXT}>Aguardem próximas atualizações!</Text>
            </View>
    </View>
)};

export default InProgress;