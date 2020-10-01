import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {Picker} from '@react-native-community/picker';
const { ScreenStackHeaderCenterView } = require("react-native-screens")
import {createR, login, forgot, profile} from './src/functions';


function HomeScreen({navigation}) {
  let state =
  {
    usuario: "",
    senha: ""
  }

  return (
    <View style={styles.container}>
    <View style={styles.profile_pic} >
        <Image style={logos.profile} source={require('./images/profilepic.png')} />
    </View>
    <View style={styles.inputView} >
      <TextInput
        style={styles.inputText}
        placeholder="Email..."
        placeholderTextColor="white"
        onChangeText={text => state['email'] = text } />
    </View>
    <View style={styles.inputView} >
      <TextInput
        secureTextEntry
        style={styles.inputText}
        placeholder="Senha..."
        placeholderTextColor="white"
        onChangeText={text => state['senha'] = text} />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Perfil')}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => navigation.navigate('Esqueceu')}>
      <Text style = {styles.forgot}>Esqueceu a senha?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => {console.log("Criando conta"); navigation.navigate('Criar')}}>
      <Text style={styles.criar}>Criar conta</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => login()}>
          <Text style={styles.bot_teste}>Lista</Text>
    </TouchableOpacity>  
    <TouchableOpacity style = {logos.touch} onPress = {() => Linking.openURL("https://www.instagram.com/ieeecimatec/")}>
      <Image style={logos.img} source = {require('./images/logoieeecimatec.png')}/>  
    </TouchableOpacity>
  </View>
  );
}

function Perfil() {
  return (
    <View style={perfil.container}>
      <View style={perfil.cabeçalho}>
        <Text>Cabeçalho</Text>
      </View>
      <View style={perfil.noticias}>
        <Text>Notícias</Text>
      </View>
      <View style={perfil.inventario}>
        <Text>Insígnias</Text>
      </View>
    </View>

  );
}

function Criar() {
  let info = {
    user: '',
    email: '',
    senha: '',
    ps: '',
    r_ps: '',
    ramo: ''
  }

  return (
    <View style={criar.container}>
      <View>
        <Text style = {criar.logo}>Criar sua conta</Text>
      </View>
        <Text style = {criar.inputTitle}>Usuário</Text>
        <View style = {styles.inputView}>
          <TextInput style = {criar.input} onChangeText={text => info['user'] = text}></TextInput>
        </View>
        <Text style = {criar.inputTitle}>Senha</Text> 
        <View style = {styles.inputView}>
          <TextInput secureTextEntry style = {criar.input} onChangeText={text => info['senha'] = text}></TextInput>
        </View>
        <Text style = {criar.inputTitle}>Email</Text>
        <View style = {styles.inputView}>
          <TextInput style = {criar.input} onChangeText={text => info['email'] = text}></TextInput>
        </View> 
        <Text style = {criar.inputTitle}>Pergunta Secreta</Text>
        <Picker
              style = {{width: "80%", height: 50, marginBottom: 20, backgroundColor: '#465881', color: 'white'}}
              onValueChange={text => info['ps'] = text}
            >
          <Picker.Item  label="---" value="none"/>
          <Picker.Item label="Quanto é 2 + 2?" value="soma"/>
          <Picker.Item label="Outro" value="other"/>
        </Picker>
        <Text style = {criar.inputTitle}>Resposta</Text>
        <View style = {styles.inputView}>
          <TextInput style = {criar.input} onChangeText={text => info['r_ps'] = text}></TextInput>
        </View>
        <Text style = {criar.inputTitle}>Ramo</Text>
        <Picker
              style = {{width: "80%", height: 50, marginBottom: 20, backgroundColor: '#465881', color: 'white'}}
              onValueChange={text => info['branch'] = text}
              itemStyle={{height: 50}}
            >
          <Picker.Item label="---" value="none"/>
          <Picker.Item label="CIMATEC" value="cimatec"/>
          <Picker.Item label="Outro" value="other"/>
        </Picker>
        <TouchableOpacity style = {criar.confirmBtn} onPress = {() =>{console.log(info); createR(info.email, info.senha, info.user, info.xp, info.membresia)}}><Text style={criar.confirmTXT}>Cadastrar-se</Text></TouchableOpacity>
    </View>
  );
}

function Esqueceu() {
  let info = {
    email: '',
    secret_question: '',
    secret_question_answer: ''
  }
  return (
    <View style={esqueceu.container}>
        <View style = {esqueceu.fortgotTXT_view}>
          <Text style = {esqueceu.forgotTXT}>Insira seu email de cadastro abaixo</Text>
        </View>
        <View style = {styles.inputView}>
          <TextInput 
          style = {criar.input} 
          onChangeText={text => info['email'] = text}
          placeholder = "Email..."
          placeholderTextColor = 'white'
          ></TextInput>
        </View>
        <View style = {esqueceu.fortgotTXT_view}>
          <Text style = {esqueceu.forgotTXT}>*Pergunta de Segurança*</Text>
        </View>
        <View style = {styles.inputView}>
          <TextInput 
          style = {criar.input} 
          placeholder = "Resposta"
          placeholderTextColor = 'white'
          ></TextInput>
        </View>
        <TouchableOpacity style={criar.confirmBtn}><Text style={styles.loginText}>Enviar</Text></TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen options={{
          title: 'Login',
          headerTitleAlign: 'center'
        
        }} name="Home" component={HomeScreen} />
              <Stack.Screen name="Perfil" component={Perfil} />
              <Stack.Screen name="Criar" component={Criar} />
              <Stack.Screen name="Esqueceu" component={Esqueceu} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  images:
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "space-evenly",
    aspectRatio: 1
  },
  container:
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  logo:
  {
    fontWeight: "bold",
    fontSize: 50,
    color: "#1B32A8",
    marginBottom: 30,
    marginTop: 60
  },
  inputView:
  {
    width: "80%",
    backgroundColor: "#465881",
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,

  },
  inputText:
  {
    height: 50,
    color: "white"
  },
  forgot:
  {
    color: "black",
    marginBottom: 10,
    fontSize: 14
  },
  loginBtn:
  {
    width: "80%",
    backgroundColor: "#fb5b5b",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 10
  },
  loginText:
  {
    color: "white"
  },
  profile_pic:
  {
    height: "40%",
    width: "80%",
    marginBottom: 20,
    marginTop: 20
  },
  criar: {
    color: 'black'
  },
  bot_teste: {
    color: 'black',
    fontSize: '25px',
    fontWeight: 'bold',
    marginTop: '10px'
  }
});

const logos = StyleSheet.create({
  img:
  {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  },
  profile:
  {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    marginBottom: 1,
    borderWidth: 2,
    borderColor: 'black'
  },
  touch:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: "center",
    width: "40.22%",
    height: "6.1%",
    flexDirection: "column"
  }
});

const perfil = StyleSheet.create ({
  container:
  {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "center"
  },
  cabeçalho:
  {
    backgroundColor: "gray",
    alignItems: "center",
    width: "100%",
    height: "16.5%",
    borderWidth: 2,
    borderColor: 'black'
  },
  noticias:
  {
    flex: 2,
    backgroundColor: 'white',
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: 'black'
  },
  inventario:
  {
    flex: 2,
    backgroundColor: "white",
    alignItems: 'center',
    width: "100%",
    borderWidth: 2,
    borderColor: 'black'
  }
})

const criar = StyleSheet.create ({
  container:
  {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "center",
  },
  logo:
  {
    fontWeight: "bold",
    fontSize: 40,
    color: "#1B32A8",
    marginBottom: 20,
    marginTop: 20
  },
  inputTitle:
  {
    alignSelf: "flex-start",
    fontSize: 20,
    marginLeft: 40
  },
  confirmBtn:
  {
    width: "50%",
    backgroundColor: "#fb5b5b",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  confirmTXT:
  {
    fontSize: 17,
    color: 'white'
  },
  input:
  {
    height: 50,
    color: 'white'
  }
})

const esqueceu = StyleSheet.create ({
  container:
  {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "center",
  },
  forgotTXT:
  {
    flex: 1,
    fontSize: 20,
    alignSelf: "center",
    margin: 10
  },
  forgotTXT_view:{
    flex: 1,
    margin: 10
  },
  confirmBtn:{
    width: "50%",
    backgroundColor: "#fb5b5b",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  confirmTXT:
  {
    color: 'white'
  }
})