import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5";
import { CHECK_TASK } from '../server/Endpoint.js';
import color from "../styles/colors.js";
import Request from "../server/request.js";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
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

    doneTask(id){
        var uri = CHECK_TASK+id;
        console.log(uri);
        let data={};
        var req = new Request("patch",uri,data,(response)=>{
            if(response.status==200){
                alert("Cheked");
            }
        })
        req.start();
    }
    render() {
        return (
            <View style={styles.containerList}>
                <View style={styles.items1}  flex={3.5}>
                    <View  flexDirection={"row"} flex={1}>
                        <View style={styles.items2} flex={2} borderRightWidth={3} borderColor={color.maincolor} >
                            <Text style={styles.name}>{this.props.name}</Text>
                        </View>
                        <View  flex={1}>
                            <View style={styles.items1} flex={1}>
                                <Text>{this.props.date}</Text>
                            </View>
                            <View style={styles.items2} flex={1} borderTopWidth={3} borderColor={color.maincolor}> 
                                <Text>{this.props.hour}</Text>
                            </View>
                        </View>
                    </View>
                    <View  flex={2} borderTopWidth={3} borderColor={color.maincolor}>
                        <Text>
                            {this.props.description}
                        </Text>
                    </View>

                </View>

                <View style={styles.items2} flex={1} borderLeftWidth={3} borderColor={color.maincolor} alignItems={"center"}>
                    <TouchableOpacity onPress={()=>{this.doneTask(this.props.id);}}>
                        <Icon
                            name="check"
                            size={55}
                            color={color.maincolor}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = {
    containerList: {
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 5,
        width:350,
        borderColor:color.maincolor
    },
    items1:{
        backgroundColor:color.thirdcolor,
        borderColor:color.maincolor
    },
    items2:{
        backgroundColor:color.fourthcolor,
        borderColor:color.maincolor
    },
    name:{
        fontSize:16,
        fontWeight:"bold"
    }
    
}
export default Item;
