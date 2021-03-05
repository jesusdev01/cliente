import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome5";
import { navigationRef } from '../../Screens/RootNavigation.js';

import ProfileScreen from "./Profile.js";
import LogoutScreen from "./Logout.js";
import NewTaskScreen from "./NewTask.js";
import MyTaskSreen from "./Mytasks.js";
import Color from "../styles/colors.js";


function Menu(props) {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.bgContainer}>
        <View style={styles.userContainer}>
          <Image source={require('../../img/task.jpg')} style={styles.im}>

          </Image>
        </View>
      </View>
      <View>

        <DrawerMenu iconName='list' titleName="My tasks" navigation={() => props.navigation.navigate('MyTasks')} />
        <DrawerMenu iconName='plus' titleName="Add task" navigation={() => props.navigation.navigate('NewTask')} />
        <DrawerMenu iconName='user-alt' titleName="Profile" navigation={() => props.navigation.navigate('Profile')} />
        <DrawerMenu {...props} iconName='sign-out-alt'  titleName="Logout" navigation={() => props.navigation.navigate('Logout')} />
      </View>

    </View>
  )
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation} style={styles.bottom}>
      <StatusBar hidden={true} />
      <View style={styles.menuContainer}>
        <View style={styles.iconoContainer}>
          <Icon size={25} name={props.iconName} color={Color.fourthcolor} />
        </View>
        <View style={styles.tituloContainer}>
          <Text style={styles.text}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer ref={navigationRef} fontFamily= "sans-serif-medium">
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="MyTasks" component={MyTaskSreen} />
        <Drawer.Screen name="NewTask" component={NewTaskScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
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
    backgroundColor: Color.maincolor,
    flex: 1,
  }, bgContainer: {
    backgroundColor: Color.maincolor,
    borderBottomWidth: 1.5,
    borderBottomColor: Color.secondcolor,
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
  text: {
    color: Color.fourthcolor,
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "sans-serif-medium"

  },
  bottom: {
    backgroundColor: Color.secondcolor,
    margin: 10,
    borderRadius: 20
  }
}
)

export default MyDrawer;