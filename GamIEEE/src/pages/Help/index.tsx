import React from 'react';
import { View, Linking, ScrollView, Text } from 'react-native';

import styles from './styles';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SpringUtils } from 'react-native-reanimated';

const Help: React.FC = () => {
  return (
    <View style = {styles.body}>
        <Header/>
            <View style = {styles.content}>
                <View style = {styles.helpBox}>
                    <View style = {styles.helpHeader}>  
                        <Text style = {styles.h1} >Como jogar?</Text>
                    </View>
                    <View style = {styles.helpInfo}>  
                        <Text style = {styles.infoTXT} >1. Os admin's postam tarefas a ser cumpridas</Text>
                        <Text style = {styles.infoTXT} >2. Ao se cumprir tarefas, recebe-se pontos de XP que se acumulam</Text>
                        <Text style = {styles.infoTXT} >3. Ao chegar a certas quantidades de XP, se sobe de nível</Text>
                        <Text style = {styles.infoTXT} >4. Há também conquista únicas, as insígnias, que são mostradas no seu perfil</Text>
                        <Text style = {styles.infoTXT} >5. Por fim, as IEEE Coins (IC) são obtidas através de contribuições específicas, e serão futuramente usadas para compras in-game</Text>
                        <TouchableOpacity onPress = {() => Linking.openURL("https://rascimatec.github.io/gamieeefication.github.io/")}><View style = {styles.button}><Text style = {styles.infoTXT}>Página de Ajuda</Text></View></TouchableOpacity>
                    </View>
                    <View style = {styles.helpHeader}>  
                    </View>
                    <View style = {styles.helpHeader}>  
                        <Text style = {styles.h1}>Temporada Atual</Text>
                    </View>
                    <View style = {styles.helpInfoBottom}>  
                            <Text style = {styles.h1}>Início: XX/XX/XX</Text>
                            <Text style = {styles.h1}>Fim: XX/XX/YY</Text>
                    </View>
                </View>
            </View>
        <Footer/>
    </View>
)};

export default Help;