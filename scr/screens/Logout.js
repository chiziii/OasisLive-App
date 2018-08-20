import React, { Component } from 'react';
import {Alert, View, Text,StyleSheet } from 'react-native';
import { Container, Button, Content, Item, Input, Label, } from "native-base";
import SInfo from 'react-native-sensitive-info';


export default class Logout extends Component {


  static navigationOptions = {
    header : null
  };

  
   userLogout() {
    try {
       SInfo.removeItem('id_token');
      Alert.alert('Logout Success!');
      
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <Container>
       <Text
             style={{marginLeft:30,marginTop: 150,fontFamily: "Cochin", fontSize: 20,
     fontWeight: "bold", color:"#333"}}>
               Do You want to Log out</Text>
      <Button rounded danger 
        title="Log Out"
      style={styles.button}
             onPress = {
                () =>this.props.navigation.navigate("Login ")}>
                  <Text style={{color: "#fff"}} >Log Out</Text>
                </Button>
      </Container>
    );
  }
}

     const styles = StyleSheet.create({

       nameText: {
         padding: 10,
         marginTop: 20,
         marginLeft: 20,
         marginRight: 20,
         height:50,
       },
       passwordText: {
         padding: 10,
         marginLeft: 20,
         marginRight: 20,
         height:50,
       },
       imageStyle:{
         width: 200, 
         height: 200, 
         marginLeft: 80,
         marginRight: 0,
         marginTop: 50,
       },
       new: {
         width: 360,
         marginTop: 0,
         height: 200,
         //backgroundColor: '#F67280',
       },
       button: {
         justifyContent: "center",
          alignItems: "center",
         marginTop: 10,
         marginLeft: 20,
         marginRight: 0,
         width: 320,
        
         backgroundColor:"#1aa4b8"     
       },
      });
// //       errorTextStyle: {
// //         color: "#E64A19",
// //         alignSelf: "center",
// //         paddingTop: 10,
// //         paddingBottom: 10
// //     }
// //     });
// }
