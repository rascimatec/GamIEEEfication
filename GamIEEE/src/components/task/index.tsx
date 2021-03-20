import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUsers, faQuestion, faTasks } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'


const Task: React.FC = () => {
    return (
        <View style={styles.taskBody}>
            <View style={styles.taskHeader}>
                <Text style={styles.h1t}>Tarefa N</Text>
            </View>
            <View style={styles.task}>
                <Text style={styles.infoTXT}>Descição da tarefa</Text>
            </View>
        </View>
    )};

    export default Task;