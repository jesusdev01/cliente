import * as React from 'react';
import { Appbar ,DefaultTheme} from 'react-native-paper';
import { StyleSheet } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'yellow',
  },
};

export default function MyBar ({titulo}){

  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');
  return(
    <Appbar theme={theme}> 
        <Appbar.Content title= {titulo} />
    </Appbar>
  
  );
}
