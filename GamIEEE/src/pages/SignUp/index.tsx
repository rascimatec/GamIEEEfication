import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import RNPickerSelect from "react-native-picker-select";


import styles from './styles';
import inputStyles from './inputStyles';
import { Value } from 'react-native-reanimated';
const SignUp: React.FC = () => {

//***************************Função com .then()**************************\\
// function handleSignIn () {   
//     //Pega os dados do usuário a partir de um formulário na página
    
//     signIn().then(response => {
//         console.log(response)
//     });
// }

//***************************Função com Async/Await**************************\\

    const { signed, user, signIn } = useAuth();
    
    const [secretQuestion, setSecretQuestion] = useState();

    console.log(signed);
    console.log(user);
    
    async function handleSignIn () {
        await signIn();
    }

return (
    <View style = {styles.body}>
        <View style = {styles.content}>
            <Text style = {styles.h1}> Criar sua conta</Text>
            <TextInput style={styles.emailInput} placeholder={'Nome de usuário'} placeholderTextColor={'#000'}>
            </TextInput>
            <TextInput style={styles.emailInput} placeholder={'Email'} placeholderTextColor={'#000'}>
            </TextInput>
            <TextInput style={styles.emailInput} placeholder={'Senha'} placeholderTextColor={'#000'}>
            </TextInput>
            <TextInput style={styles.emailInput} placeholder={'Código de Admin'} placeholderTextColor={'#000'}>
            </TextInput>
            <TextInput style={styles.emailInput} placeholder={'Resposta da pergunta secreta'} placeholderTextColor={'#000'}>
            </TextInput>
            <View style={styles.emailInput}>
            <RNPickerSelect
                            onValueChange={(value) => setSecretQuestion(value)}
                            items={[
                                { label:"Qual nome do seu primeiro animal de estimação?", value: "animal" },
                                { label: "Qual seu apelido de infância?", value: "apelido" },
                                { label: "Qual primeiro livro que você leu?", value: "livro" },
                                { label: "Qual nome da sua primeira professora?", value: "professora" },
                                { label: "Onde foi o seu primeiro emprego?", value: "emprego" },
                            ]}
                            placeholder = {{
                                label: 'Pergunta secreta',
                                value: null,
                                color: '#9EA0A4',
                              }}
                              style = {inputStyles}
                        />
            </View>
            <TextInput style={styles.emailInput} placeholder={'Resposta da pergunta secreta'} placeholderTextColor={'#000'}>
            </TextInput>
            <View style={styles.emailInput}>
            <RNPickerSelect
                            onValueChange={(value) => setSecretQuestion(value)}
                            
                            items={[
                                { label:"RAS", value: "ras" },
                                { label: "PES", value: "pes" },
                                { label: "EMBS", value: "embs" },
                            ]}

                            placeholder = {{
                                label: 'Capítulo',
                                value: null,
                                color: '#9EA0A4',
                              }}
                              style = {inputStyles}
                        />
            </View>
            <TouchableOpacity onPress = {handleSignIn} style = {styles.buttonOpacity}><View><Text style = {styles.buttonTXT}>Confirmar</Text></View></TouchableOpacity>
        </View>
    </View>
)
};

export default SignUp;