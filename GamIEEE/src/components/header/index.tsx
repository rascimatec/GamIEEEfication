import AdmHeader from './admHeader'
import UserHeader from './userHeader'
import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const Header: React.FC = () => {

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

   const [user, setUser] = useState<User | null>(null);

   useEffect(() => {
       async function fetchMyAPI() {
         let preUser = await AsyncStorage.getItem('@Gamieeefication:user');
         preUser = JSON.parse(preUser)
         setUser(preUser)
       }
   
       fetchMyAPI()
     }, [])

    return user?.is_adm ? 
    <AdmHeader
    name={user?.user_name.split(" ")[0]}
    level={user?.level}
    coins={user?.coins}
    xp={user?.xp}
    descricao={user?.descricao}
    capitulo={user?.chapter}
    />
    :
    <UserHeader
    name={user?.user_name.split(" ")[0]}
    level={user?.level}
    coins={user?.coins}
    xp={user?.xp}
    descricao={user?.descricao}
    capitulo={user?.chapter}
    />
} 

export default Header;