import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../styles/colors.js";

class CustomButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
    const {iconname,colorI,onPress} = this.props;
    var icon = iconname;
    var colorIcon = colorI 
        return (
            <TouchableOpacity onPress={()=>{onPress();}}>
                <Icon 
                    name={icon}
                    size={55}
                    color={color.maincolor}
                />
            </TouchableOpacity>
        )
    }
}

export default CustomButton;