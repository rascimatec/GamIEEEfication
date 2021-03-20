import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button: React.FC = ({children}) => {
    return (    
    <TouchableOpacity style = {styles.button}><View><Text style = {styles.buttonTXT}>{children}</Text></View></TouchableOpacity>
)};

export default Button;