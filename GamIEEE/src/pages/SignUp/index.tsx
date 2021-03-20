import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create( {
    container: {flex: 1, justifyContent: 'center'}
});

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

    console.log(signed);
    console.log(user);
    
    async function handleSignIn () {
        await signIn();
    }

return (
    <View style = {styles.container}>
        <Button title = "Sign In" onPress = {handleSignIn} />
    </View>
)
};

export default SignUp;