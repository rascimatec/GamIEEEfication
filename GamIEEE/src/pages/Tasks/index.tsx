import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tasks: React.FC = () => {
return (
    <View style = {styles.body}>
        <Header/>
            <View style = {styles.content}>
                <View><Text style = {styles.h1}>Em progresso</Text></View>
                <ScrollView style = {styles.scrollContent}>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 1</Text>
                              
                            <View style = {styles.completeTaskButton}>
                                <TouchableOpacity style = {styles.completeTaskButtonClick}>
                                    <FontAwesomeIcon icon = {faCheck} size={ 24 }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 2</Text>
                              
                            <View style = {styles.completeTaskButton}>
                                <TouchableOpacity style = {styles.completeTaskButtonClick}>
                                    <FontAwesomeIcon icon = {faCheck} size={ 24 }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 3</Text>
                              
                            <View style = {styles.completeTaskButton}>
                                <TouchableOpacity style = {styles.completeTaskButtonClick}>
                                    <FontAwesomeIcon icon = {faCheck} size={ 24 }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 4</Text>
                              
                            <View style = {styles.completeTaskButton}>
                                <TouchableOpacity style = {styles.completeTaskButtonClick}>
                                    <FontAwesomeIcon icon = {faCheck} size={ 24 }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 5</Text>
                              
                            <View style = {styles.completeTaskButton}>
                                <TouchableOpacity style = {styles.completeTaskButtonClick}>
                                    <FontAwesomeIcon icon = {faCheck} size={ 24 }/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    </ScrollView>
                    <View><Text style = {styles.h1}>Completas</Text></View>
                    <ScrollView style = {styles.scrollContent}>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 6</Text>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 7</Text>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 8</Text>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 9</Text>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    <View style = {styles.taskBody}>
                        <View style = {styles.taskHeader}>
                            <Text style = {styles.h1t}>Tarefa 10</Text>
                        </View>
                        <View style = {styles.task}>
                            <Text  style = {styles.infoTXT}>Descição da tarefa</Text>  
                        </View>
                    </View>
                    </ScrollView>    
            </View>
        <Footer/>
    </View>
)};

export default Tasks;