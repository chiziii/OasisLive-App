import React, { Component } from 'react';

import  {
  
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';
import SInfo from 'react-native-sensitive-info';

const t = require('tcomb-form-native')

const Form = t.form.Form

const User = t.struct({
  email: t.String,
  password:  t.String
})

const options = {
  fields: {
    email: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false
    }
  }
}

export default class Login extends React.Component {

  static navigationOptions = { title: 'Welcome', header: null };

  constructor(props) {
    super(props)
    this.state = {
      value: {
        Email: '',
        Password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        Email: '',
        Password: null
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }
  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
        Email: value.Email,
      Password: value.Password
      }
      // Serialize and post the da
      fetch("https://learnbase.com.ng/api/login", {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        data: JSON.stringify({
          Email: this.state.Email,
          Password: this.state.Password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error) {
          alert(responseData.error)
        } else {
          alert(`Welcome`)
          SInfo.getItem('id_token', responseData.id_token),
          // Redirect to home screen
          this.props.navigation.navigate("Dashboard")
        }
      })
      .catch(() => {
        alert('There was an error logging in.');
      })
      .done()
    } else {
      // Form validation error
      alert('Please fill in the Empty blocks')
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <Image source={require("../../images/last.jpg")} style={styles.imageStyle} />
        <Form
          ref="form"
          options={options}
          type={User}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress = {
                            () =>this.props.navigation.navigate("Dashboard")}>
          <Text style={[styles.button, styles.skip]} >Skip Log In</Text>
        </TouchableHighlight>
        
        <Text style={{textColor: "#000",  marginLeft: 55, fontWeight: "bold",marginTop: 5}}
         onPress = {() =>this.props.navigation.navigate("Register")}>
                Don't have an account? Register now

</Text>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 35,
    padding: 12,
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
  greenButton: {
    backgroundColor: '#1aa4b8'
  },
  skip: {
    backgroundColor :"#184E68",
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle:{
            width: 200, 
             height: 200, 
          marginLeft: 60,
             marginRight: 0,
              marginTop: 50,
            },
})



// import { StyleSheet, Image, Alert, Form} from "react-native";
// import React, { Component } from "react";
// import { Container, Header, Content, Item, Input, Label, Text, Button} from "native-base";
// import t from "tcomb-form-native";


// export default class Login extends Component {

//   constructor(props){
//     super(props)

//   const STORAGE_KEY = 'id_token';

//   var Form = t.form.Form;
 
//   var Person = t.struct({
//    fristName: t.String,
//    lastName: t.String,
//    username: t.String,
//    password: t.String,
//    phone: t.String,
//  });
 
//  const options = {};
// }

//   _userLogin() {
//     var value = this.refs.form.getValue();
//     if (value) { // if validation fails, value will be null
//       fetch("https://learnbase.com.ng/api/login", {
//         method: "POST",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username: value.username,
//           password: value.password,
//         })
//       })
//       .then((response) => response.json())
//       .then((responseData) => {
//         Alert.alert(
//           "Message","Login Success!",
//         ),
//         this._onValueChange(this.STORAGE_KEY, responseData.id_token)
//       })
//       .done();
//     }
//   }


//   static navigationOptions = {
//     header : null
//   };


//   render() {
//      return (
//        <Container>
//          <Content>
//          <Image source={require("../images/last.jpg")} style={styles.imageStyle} />
           
//              <Item floatingLabel style={styles.nameText}>
//                <Label>Email</Label>
//                <Input />
//              </Item>
//              <Item floatingLabel style={styles.nameText}>
//                <Label>Password</Label>
//                <Input />
//              </Item>
//              <Button rounded light style={styles.button}
//              onPress = {
//                 () =>this.props.navigation.navigate("Second")}>
//              <Text style={{color:"#fff"}}>Login</Text>
//            </Button>
//            <Text style={{textColor: "#000",  marginLeft: 55,marginTop: 10 }}>
//                  Don't have an account? Register now</Text>
        
//          </Content>
//        </Container>
//     );
//   }
//   }
//      const styles = StyleSheet.create({

//        nameText: {
//          padding: 10,
//          marginTop: 20,
//          marginLeft: 20,
//          marginRight: 20,
//          height:50,
//        },
//        passwordText: {
//          padding: 10,
//          marginLeft: 20,
//          marginRight: 20,
//          height:50,
//        },
//        imageStyle:{
//          width: 200, 
//          height: 200, 
//          marginLeft: 80,
//          marginRight: 0,
//          marginTop: 50,
//        },
//        new: {
//          width: 360,
//          marginTop: 0,
//          height: 200,
//          //backgroundColor: '#F67280',
//        },
//        button: {
//          justifyContent: "center",
//           alignItems: "center",
//          marginTop: 30,
//          marginLeft: 20,
//          marginRight: 0,
//          width: 320,
        
//          backgroundColor:"#1aa4b8"     
//        },
//       });
// // //       errorTextStyle: {
// // //         color: "#E64A19",
// // //         alignSelf: "center",
// // //         paddingTop: 10,
// // //         paddingBottom: 10
// // //     }
// // //     });
// // }