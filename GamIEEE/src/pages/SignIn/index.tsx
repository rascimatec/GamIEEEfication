import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { signIn } from '../../services/auth'

import styles from './styles';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import api from '../../services/api'

const SignIn: React.FC = () => {

    //***************************Função com .then()**************************\\
    // function handleSignIn () {   
    //     //Pega os dados do usuário a partir de um formulário na página

    //     signIn().then(response => {
    //         console.log(response)
    //     });
    // }

    //***************************Função com Async/Await**************************\\

    const { isSigned, user, signIn, signOut } = useAuth();
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn(username:string, password:string) {
        await signIn(username, password)
        if(isSigned) {
            navigation.navigate("Dashboard");
        }
    }

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1618521720/logo_nkecyd.png' }}
            />
            <View style={styles.content}>
                <Text style={styles.h1}>GamIEEE</Text>
                <TextInput style={styles.emailInput} placeholder={'Nome de usuário'} placeholderTextColor={'#000'} onChangeText={text => setUsername(text)}></TextInput>
                <TextInput style={styles.emailInput} placeholder={'Senha'} placeholderTextColor={'#000'} onChangeText={text => setPassword(text)}></TextInput>
                <TouchableOpacity onPress={() => handleSignIn(username, password)} style={styles.buttonOpacity}><View><Text style={styles.buttonTXT}>Entrar</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => signOut()}><Text style={styles.forgotTXT}>Esqueceu sua senha?</Text></TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerTXT}>Não tem conta?</Text><TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.footerLink}>Criar sua conta</Text></TouchableOpacity>
            </View>
        </View>
    )
};

export default SignIn;