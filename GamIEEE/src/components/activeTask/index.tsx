import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './styles'


const ActiveTask: React.FC = () => {
    return (
        <View style={styles.taskBody}>
            <View style={styles.taskHeader}>
                <Text style={styles.h1t}>Tarefa N</Text>
                <View style = {styles.taskBox}>
                <View style = {styles.editTaskButton}>
                    <TouchableOpacity style = {styles.completeTaskButtonClick}>
                        <FontAwesomeIcon icon = {faPencilAlt} size={ 24 }/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cancelTaskButton}>
                    <TouchableOpacity style = {styles.completeTaskButtonClick}>
                        <FontAwesomeIcon icon = {faTimes} size={ 24 }/>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.task}>
                <Text style={styles.infoTXT}>Descição da tarefa</Text>
                
            </View>
        </View>
    )};

    export default ActiveTask;