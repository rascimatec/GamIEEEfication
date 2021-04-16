import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import inputStyles from './inputStyles';
import { useNavigation } from '@react-navigation/native'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Button from '../../components/button'
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from '@react-native-community/datetimepicker';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();

    const [selectedLanguage, setSelectedLanguage] = useState();

    const pickerStyle = {
        inputIOS: {
            color: 'white',
            paddingHorizontal: 10,
            backgroundColor: 'red',
            borderRadius: 5,
        },
        placeholder: {
            color: 'white',
          },
        inputAndroid: {
            color: 'white',
            paddingHorizontal: 10,
            backgroundColor: 'red',
            borderRadius: 5,
        },
    };

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
                            <View style={styles.emailInput}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label:"Qual nome do seu primeiro animal de estimação?", value: "animal" },
                                { label: "Qual seu apelido de infância?", value: "apelido" },
                                { label: "Qual primeiro livro que você leu?", value: "livro" },
                                { label: "Qual nome da sua primeira professora?", value: "professora" },
                                { label: "Onde foi o seu primeiro emprego?", value: "emprego" },
                            ]}
                            style = {inputStyles}
                            
                        />
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