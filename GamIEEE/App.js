import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = 
  {
    email:"",
    password:""
  }
  render()
  {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>GamIEEE</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="white"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha..." 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:
  {
    fontWeight:"bold",
    fontSize:50,
    color:"#1B32A8",
    marginBottom:40
  },
  inputView:
  {
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:
  {
    height:50,
    color:"white"
  },
  forgot:
  {
    color:"black",
    marginBottom:10,
    fontSize:14
  },
  loginBtn:
  {
    width:"80%",
    backgroundColor:"#fb5b5b",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:0,
    marginBottom:10
  },
  loginText:
  {
    color:"black"
  }
});