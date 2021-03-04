import * as React from 'react';
import { View, Text , TouchableOpacity, Touchable} from 'react-native';
import MyBar from "./AppBar";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function UserScreen() {
    return (
      
      <View >
            <MyBar titulo="Listings"/>
            <View alignItems={"center"} paddingTop={50}>
                <Icon size={200} name='th-list' />
            </View>
        </View>
    );
  }