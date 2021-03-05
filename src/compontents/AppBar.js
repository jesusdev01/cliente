import * as React from 'react';
import { Appbar ,DefaultTheme} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import color from '../styles/colors';
import * as RootNavigation from "../../Screens/RootNavigation";
import { DrawerActions } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.maincolor,
    accent: 'yellow',
  },
};

export default function MyBar ({titulo,navigation}){

  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  return(
    <Appbar theme={theme} > 
        <Appbar.Action icon="menu" onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}}/>
        <Appbar.Content title= {titulo}/>
    </Appbar>
  
  );
}
