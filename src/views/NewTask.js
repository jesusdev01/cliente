import * as React from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import { Appbar, DefaultTheme, TextInput } from 'react-native-paper';
import color from '../styles/colors';
import { DrawerActions } from '@react-navigation/native';
import CustomButton from '../compontents/ButtonNewTask.js';
import Request from "../server/request.js";
import {CREATE_TASK} from "../server/Endpoint.js";

class UserScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            description:"",
            day:"",
            mounth:"",
            year:"",
            hour:"",
            minute:"",
            second:"",
            done:false
        }
    };
    componentDidMount(){}

    registerData(){
        console.log(this.state);
        let data={
            name:this.state.name,
            description:this.state.description,
            date:this.state.day + "-" + this.state.mounth + "-" + this.state.year,
            hour:this.state.hour + ":" + this.state.minute + ":" + this.state.second,
            done:false
        }
        var req = new Request("post",CREATE_TASK,data,(response)=>{
            if(response.status==200){
                alert("Tarea Registrada");

            }
        });
        req.start();
    }
    
    render(){
    const {navigation} = this.props;
    var navig = navigation;
    return (

        <View style={styles.container} alignItems="center">
            <Appbar theme={theme} >
                <Appbar.Action icon="menu" onPress={() => { navig.dispatch(DrawerActions.openDrawer()) }} />
                <Appbar.Content title="New Task" />
            </Appbar>
            <View style={styles.inputBar}>

                <Text style={styles.inputText}>NOMBRE</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nombre de tarea" 
                    theme={theme} 
                    placeholderTextColor="white"
                    onChangeText={(texto)=>{
                        this.setState({
                            name:texto,
                        })
                    }}/>
                
                <Text style={styles.inputText}>DESCRIPCION</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Descripcion"
                    theme={theme}
                    placeholderTextColor="white"
                    multiline={true}
                    numberOfLines={5}
                    onChangeText={(texto)=>{
                        this.setState({
                            description:texto,
                        })
                    }}
                />
                <Text style={styles.inputText}>FECHA</Text>
                <View flexDirection={"row"} justifyContent="center">
                    <View width={60}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            placeholder="01"
                            theme={theme}
                            placeholderTextColor="white"
                            onChangeText={(texto)=>{
                                this.setState({
                                    day:texto,
                                })
                            }}
                        />
                    </View>
                    <View marginHorizontal={10}>
                        <Text style={styles.signal}>-</Text>
                    </View>

                    <View width={60}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            placeholder="01"
                            theme={theme}
                            placeholderTextColor="white"
                            onChangeText={(texto)=>{
                                this.setState({
                                    mounth:texto,
                                })
                            }}
                        />
                    </View>

                    <View marginHorizontal={10}>
                        <Text style={styles.signal}>-</Text>
                    </View>

                    <View width={100}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            placeholder="1996"
                            theme={theme}
                            placeholderTextColor="white"
                            onChangeText={(texto)=>{
                                this.setState({
                                    year:texto,
                                })
                            }}
                        />
                    </View>
                </View>
                <Text style={styles.inputText}>HORA</Text>

                <View flexDirection={"row"} justifyContent="center" >
                    <View width={60}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            keyboardType="numeric"
                            placeholder="01"
                            theme={theme}
                            placeholderTextColor="white"onChangeText={(texto)=>{
                                this.setState({
                                    hour:texto,
                                })
                            }}
                        />
                    </View>
                    <View marginHorizontal={10}>
                        <Text style={styles.signal}>:</Text>
                    </View>

                    <View width={60}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            placeholder="01"
                            theme={theme}
                            placeholderTextColor="white"
                            onChangeText={(texto)=>{
                                this.setState({
                                    minute:texto,
                                })
                            }}
                        />
                    </View>

                    <View marginHorizontal={10}>
                        <Text style={styles.signal}>:</Text>
                    </View>

                    <View width={60}>
                        <TextInput
                            style={styles.inputDate}
                            keyboardType="numeric"
                            placeholder="00"
                            theme={theme}
                            placeholderTextColor="white"
                            onChangeText={(texto)=>{
                                this.setState({
                                    second:texto,
                                })
                            }}
                        />
                    </View>
                </View>

            </View>
            <View flexDirection="row" marginTop={20} marginHorizontal={20} >
                <View flex={0.8} alignItems={"center"} backgroundColor={color.thirdcolor} borderRadius={50}>
                    <CustomButton iconname="check" colorI="green" onPress={()=>{this.registerData();}}/>
                </View>
                <View flex={1.4} ></View>
                <View flex={0.8} alignItems={"center"} backgroundColor={color.thirdcolor} borderRadius={50}>
                    <CustomButton iconname="times" colorI="red"/>
                </View>
            </View>
        </View>
    );
    }
}



const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: color.maincolor,
        accent: 'yellow',
        text: color.fourthcolor
    },
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: color.secondcolor,
    },
    inputBar: {
        width: 300,
        color: "white",
    },
    input: {
        backgroundColor: "transparent",
        fontSize: 15,
        color: "white",
    },
    inputDate: {
        backgroundColor: "transparent",
        fontSize: 25,
        color: "white",
    },
    inputText: {
        color: color.fourthcolor,
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 30
    },
    signal:{
        color: color.fourthcolor,
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 18,
    }
}

export default UserScreen