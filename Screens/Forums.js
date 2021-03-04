import * as React from 'react';
import { View, Text , TouchableOpacity, Touchable} from 'react-native';
import MyButton from "./Button";
import { StyleSheet } from 'react-native';
import MyBar from "./AppBar";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function HomeScreen() {
    return (
        <View >
            <MyBar titulo="Forums"/>
            <View alignItems={"center"} paddingTop={50}>
                <Icon size={200} name='comment-alt' />
            </View>
        </View>
        
    );
  }