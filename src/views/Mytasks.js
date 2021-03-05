import * as React from 'react';
import { View, Text, TouchableOpacity, Touchable ,FlatList} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Appbar ,DefaultTheme} from 'react-native-paper';
import color from '../styles/colors';
import { DrawerActions } from '@react-navigation/native';
import{SHOW_TASK} from "../server/Endpoint";
import Item from "../compontents/List.js"
import { CHECK_TASK } from '../server/Endpoint.js';
import Request from "../server/request.js";

class UserScreen extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            list:[],
        }
    }
    componentDidMount(){
        var request = new Request('get',SHOW_TASK,{},(response)=>{
            if(response.status==200){
                this.setState({
                    list:response.data,
                })
                console.log(response.data)
            }
        });
        request.start();
    }
    doneTask(id){
        var uri = CHECK_TASK+id;
        let data={};
        var req = new Request("patch",uri,data,(response)=>{
            if(response.status==200){
                alert("Cheked");
            }
        })
    }

    render(){
    const {navigation} = this.props;
    var navig = navigation;
    return (

        <View style={styles.container}>
            <Appbar theme={theme} >
                <Appbar.Action icon="menu" onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} />
                <Appbar.Content title="Mytask"/>
            </Appbar>

            <View alignItems={"center"} paddingTop={20}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=>(
                        <Item
                            name={item.name}
                            description={item.description}
                            date={item.date}
                            hour={item.hour}
                            done={item.done}
                            id={item._id}
                            doneTask={(id)=>{
                                this.doneTask(id);
                            }}
                        />
                    )}
                    keyExtractor={(item)=>item._id}
                />
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
    },
  };

const styles = {
    container:{
        backgroundColor:color.secondcolor,
        flex:1
    }
}

export default UserScreen;