import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

const SignIn: React.FC = () => {

//***************************Função com .then()**************************\\
// function handleSignIn () {   
//     //Pega os dados do usuário a partir de um formulário na página
    
//     signIn().then(response => {
//         console.log(response)
//     });
// }

//***************************Função com Async/Await**************************\\

    const { signed, user, signIn } = useAuth();
    const navigation = useNavigation();
    
    console.log(signed);
    console.log(user);
    
    async function handleSignIn () {
        await signIn();
    }

return (
    <View style = {styles.body}>
        <Image
          style={styles.logo}
          source = {{uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1618521720/logo_nkecyd.png'}}
        />
        <View style = {styles.content}>
        
            <Text style = {styles.h1}>GamIEEE</Text>
            <TextInput style={styles.emailInput} placeholder={'Nome de usuário'} placeholderTextColor={'#000'}>
            </TextInput>
            <TextInput style={styles.emailInput} placeholder={'Senha'} placeholderTextColor={'#000'}>
            </TextInput>
            <TouchableOpacity onPress = {handleSignIn} style = {styles.buttonOpacity}><View><Text style = {styles.buttonTXT}>Entrar</Text></View></TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('Forgot')}><Text style = {styles.forgotTXT}>Esqueceu sua senha?</Text></TouchableOpacity>
        </View>
        <View style = {styles.footer}>
            <Text style = {styles.footerTXT}>Não tem conta?</Text><TouchableOpacity onPress = {() => navigation.navigate('SignUp')}><Text style = {styles.footerLink}>Criar sua conta</Text></TouchableOpacity>
        </View>
    </View>
)
};

export default SignIn;