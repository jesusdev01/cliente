import * as React from 'react';
import { View, Text , TouchableOpacity, Touchable} from 'react-native';
import MyButton from "./Button";
import { StatusBar } from 'react-native';
import MyBar from "./AppBar";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function HomeScreen() {
    return (
        <View >
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
            <MyBar titulo="Home"/>
            <View alignItems={"center"} paddingTop={50}>
                <Icon size={200} name='home' />
            </View>
        </View>
    );
  }