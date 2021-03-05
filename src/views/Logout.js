import * as React from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Appbar ,DefaultTheme} from 'react-native-paper';
import color from '../styles/colors';
import { DrawerActions } from '@react-navigation/native';

export default function UserScreen({ navigation }) {
    return (

        <View >
            <Appbar theme={theme} >
                <Appbar.Action icon="menu" onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} />
                <Appbar.Content title="Logout"/>
            </Appbar>
            <View alignItems={"center"} paddingTop={50}>
                <Icon size={200} name='sign-out-alt' />
            </View>
        </View>
    );
}

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.maincolor,
      accent: 'yellow',
    },
  };
  