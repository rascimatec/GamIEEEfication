import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAward, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../contexts/auth';
import { TextInput } from 'react-native-gesture-handler';
import Footer from '../../components/footer'
import Header from '../../components/header'
import UserInfo from '../../components/userInfo'
import AsyncStorage from '@react-native-community/async-storage';

const ProfileScreen = () => {

     interface User {
         chapter: string,
         coins: number,
         descricao: string,
         is_adm: number,
         level: number,
         membro: boolean,
         ramo: string,
        user_name: string,
         xp: number,
     }

    const { signOut } = useAuth();
    const navigation = useNavigation();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchMyAPI() {
          let preUser = await AsyncStorage.getItem('@Gamieeefication:user');
          preUser = JSON.parse(preUser)
          console.log('Profile')
          console.log(preUser)
          setUser(preUser)
        }
    
        fetchMyAPI()
      }, [])
    
    return (
        <View style = {styles.body}>
            <Header/>
            <View style = {styles.content}>
                    <UserInfo
                    name= {user?.user_name}
                    level={user?.level}
                    />
                    <View><Text style = {styles.h1}>XP: {user?.xp}</Text></View>
                    <View style = {styles.tagBox}>
                            <View style = {styles.tag1}><Text style = {styles.tagTitle}>{user?.chapter}</Text></View>
                            <View style = {styles.tag2}><FontAwesomeIcon style = {{color: '#00ccff'}} icon = {faGlobe} size={ 24 }  /><Text style = {styles.tagTitleMember}>{user?.membro ? 'MEMBRO IEEE':'SEM MEMBRESIA'}</Text><FontAwesomeIcon style = {{color: '#00ccff'}} icon = {faGlobe} size={ 24 }  /></View>
                    </View>
                    <View style = {styles.descriptionBox}>
                        <Text style = {styles.h1}>Sobre mim</Text>
                        <TextInput defaultValue = {user?.descricao} maxLength = {235} multiline = {true} style = {styles.descriptionBoxInput}></TextInput>
                    </View>
                    <View style = {styles.h1Inline}><FontAwesomeIcon style = {{color: '#FFDF00'}} icon = {faAward} size={ 24 }  /><Text style = {styles.h1Inline}>Minhas insígnias</Text><FontAwesomeIcon style = {{color: '#FFDF00'}} icon = {faAward} size={ 24 }  /></View>
                    <View style = {styles.badgeBox}>
                        <View style = {styles.badgeRow}> 
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 1</Text>
                            </View>
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 2</Text>
                            </View>
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 3</Text>
                            </View>
                        </View>
                        <View style = {styles.badgeRow}> 
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 4</Text>
                            </View>
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 5</Text>
                            </View>
                            <View style = {styles.badgeItem}>
                                <Image style = {styles.badgeImage} source={{ uri: 'https://res.cloudinary.com/gamieeefication/image/upload/v1616169422/question_mark_PNG142_u4ex1t.png'}}/>
                                <Text style = {styles.badgeTitle}>Insígnia 6</Text>
                            </View>
                        </View>
                    </View>
            </View>
            <Footer/>
        </View>
        
    )
    };
    
    export default ProfileScreen;