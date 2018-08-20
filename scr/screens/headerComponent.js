import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableHightlight} from "react-native";
import { Icon, Button,Text, Container, Header, Content, Left, Body , Title, Right} from 'native-base';

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.menu}>
            <TouchableHightlight style={{marginLeft:10, marginTop:20}}
            onPress = {
                            () =>this.props.navigation.navigate("DrawerOpen")}>
<Icon type="FontAwesome" name="home" style= {{height:32 , width: 32}} />    
             </TouchableHightlight> 
            </View>
        );
      }
}
const styles = StyleSheet.create({

    menu:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 90,
      }
});