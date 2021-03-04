import * as React from 'react';
import { View, Text , TouchableOpacity, Touchable} from 'react-native';
import * as RootNavigation from './RootNavigation.js';

export default function HomeScreen() {
    return (
    
        <TouchableOpacity onPress={()=>RootNavigation.navigate("Usuario")}>
            <Text>Ir a perfil</Text>
        </TouchableOpacity>
     
    );
  }