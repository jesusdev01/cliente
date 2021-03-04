import * as React from 'react';
import { View, Text , TouchableOpacity, Touchable} from 'react-native';
import MyBar from "./AppBar";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function ListScreen() {
    return (
      <View >
            <MyBar titulo="Profile"/>
            <View alignItems={"center"} paddingTop={50}>
                <Icon size={200} name='child' />
            </View>
        </View>
    );
  }