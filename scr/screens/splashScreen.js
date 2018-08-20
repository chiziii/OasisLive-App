import React, { Component } from "react";
import { StyleSheet, Image, View} from "react-native";
import { Icon, Button,Text, Container, Header, Content, Left, Body , Title, Right} from 'native-base'

export default class splashScreen extends Component {

  static navigationOptions = {
     title: 'Welcome',
   header: null,
   //drawerLockMode: 'locked-closed' }
   } ;

  render() {
    return (
        <View>
        <Image source={require("../../images/back.jpeg")} style={styles.backgroundImage} />
          <Text
            style={{marginLeft:20,marginTop: 150,fontFamily: "Cochin", fontSize: 70,fontWeight: "bold",
 color:"#fff"}}>
              OasisLive</Text>
              <Button bordered success  style={styles.button}
            onPress = {
                () =>this.props.navigation.navigate("Login")}>
            <Text style={{color:"#fff"}}>Explore</Text>
          </Button>
          
        </View>
    );
  }

}

const styles = StyleSheet.create({

    backgroundImage: {
         position: "absolute",
        resizeMode: "contain", // or 'stretch'
      },
      button: {
        marginTop: 30,
        marginLeft: 120,
        marginRight: 0,
        width: 100,
        justifyContent: "center",
        alignItems: "center",     
      },
  });
