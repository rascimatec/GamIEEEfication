import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import Footer from '../../components/footer'
import Header from '../../components/header'
import Button from '../../components/button'
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.body}>
            <Header />
            <View style={styles.content}>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}><View><Text style={styles.containerHeader}>Confirmações</Text></View></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ActiveTasks')}><View><Text style={styles.containerHeader}>Tarefas Ativas</Text></View></TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollContent} nestedScrollEnabled={true}>
                    <View style={styles.container}>
                        <View style={styles.containerHeader}><Text style={styles.containerHeader}>Adicionar Tarefa</Text></View>
                        <View style={styles.containerContent}>
                            <TextInput style={styles.inputName} placeholder={'Nome da tarefa'} placeholderTextColor={'#000'}>
                            </TextInput>
                            <TextInput style={styles.inputDate} dataDetectorTypes={'calendarEvent'} placeholder={'Prazo final'} placeholderTextColor={'#000'}>
                            </TextInput>
                            <View style = {styles.pickerView}>
                            <Picker
                                itemStyle={{  color: "#000", fontFamily:"Ebrima", fontSize:17 }}
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                                }
                            >
                                <Picker.Item label="TODOS" value="TODOS" />
                                <Picker.Item label="RAS" value="RAS" />
                                <Picker.Item label="EMBS" value="EMBS" />
                                <Picker.Item label="PES" value="PES" />                               
                                <Picker.Item label="OUTROS" value="OUTROS" />
                            </Picker>
                            </View>
                            <TextInput style={styles.inputDescription} dataDetectorTypes={'calendarEvent'} placeholder={'Descrição da tarefa...'} placeholderTextColor={'#000'}>
                            </TextInput>
                            <Button>Confirmar</Button>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.containerHeader}><Text style={styles.containerHeader}>Adicionar Evento</Text></View>
                        <View style={styles.containerContent}>
                            <TextInput style={styles.inputName} placeholder={'Nome do evento'} placeholderTextColor={'#000'}>
                            </TextInput>
                            <TextInput style={styles.inputDate} dataDetectorTypes={'calendarEvent'} placeholder={'Data'} placeholderTextColor={'#000'}>

                            </TextInput>
                            <Button>Confirmar</Button>
                            {/* <RNDateTimePicker testID="dateTimePicker"
                                    value={new Date(1598051730000)}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    /> */}
                        </View>

                    </View>
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
};
export default ProfileScreen;