import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome5"
import { navigationRef } from '../Screens/RootNavigation.js';

import HomeScreen from "../Screens/home";
import ProfileScreen from "../Screens/Profile";
import ListingsScreen from "../Screens/Listings";
import ForumsScreen from "../Screens/Forums";
import SettingsScreen from "../Screens/Settings";
import HelpScreen from "../Screens/Help";
import LogoutScreen from "../Screens/Logout";



function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <View style={styles.userContainer}>
          <Image source={require('../img/helado.png')} style={styles.im}>

          </Image>
        </View>
      </View>
      <DrawerMenu iconName='home' titleName="Home" navigation={()=>props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='child' titleName="Profile" navigation={()=>props.navigation.navigate('Profile')}/>
      <DrawerMenu iconName='th-list' titleName="Listings" navigation={()=>props.navigation.navigate('Listings')}/>
      <DrawerMenu iconName='comment-alt' titleName="Forums" navigation={()=>props.navigation.navigate('Forums')}/>
      <DrawerMenu iconName='cogs' titleName="Settings" navigation={()=>props.navigation.navigate('Settings')}/>
      <DrawerMenu iconName='info-circle' titleName="Help" navigation={()=>props.navigation.navigate('Help')}/>
      <DrawerMenu iconName='sign-out-alt' titleName="Logout" navigation={()=>props.navigation.navigate('Logout')}/>
    </View>
  )
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style = {styles.menuContainer}>
        <View style = {styles.iconoContainer}>
          <Icon size={25} name={props.iconName} />
        </View>
        <View style = {styles.tituloContainer}>
          <Text>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Listings" component={ListingsScreen} />
        <Drawer.Screen name="Forums" component={ForumsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
        
      </Drawer.Navigator>

    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  im: {
    width: 150,
    height: 150,
    borderRadius: 80
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  }, bgContainer: {
    backgroundColor: 'red',
    borderBottomWidth: 1.5,
    borderBottomColor: '#A0A0A0',
    padding: 20
  }, userContainer: {

    alignItems: 'center',
    justifyContent: 'center',

  }, menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center'
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center'
  },
}
)

export default MyDrawer;