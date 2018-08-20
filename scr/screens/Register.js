import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import SInfo from 'react-native-sensitive-info';

const t = require('tcomb-form-native');

const Form = t.form.Form


const newUser = t.struct({
  fristName: t.String,
  lastName:t.String,
  email: t.String,
  password:  t.String,
  phone: t.String,
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

export default class Register extends React.Component {

  static navigationOptions = { title: 'Welcome', header: null };


  constructor(props) {
    super(props)
    this.state = {
      value: {
        fristName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      }
    }
  }


  componentWillUnmount() {
    this.setState = {
      value: {
        fristName: '',
        lastName: '',
        email: '',
        password: null,
        phone: ''
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
        fristName: value.fristName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        phone: value.phone,
      }
      // Serialize and post the data
      const json = JSON.stringify(data);
      fetch("https://learnbase.com.ng/api/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        
      })
      .then((response) => response.json())
      .then((responseData) => {
        alert('Welcome on Board.');
        SInfo.setItem('id_token', responseData.id_token),
        // Redirect to home screen
        this.props.navigation.navigate("Dashboard");
      })
      .catch((error) => {
        alert('There was an error creating your account.');
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
       <Text
             style={{marginLeft:130,marginTop: 50,fontFamily: "Cochin", fontSize: 50,
     fontWeight: "bold", color:"#333"}}>
               Register</Text>
        <Form
          ref='form'
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Create Account</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }


}
const styles = StyleSheet.create({
  container: {
    padding: 20,
     flex: 1,
    flexDirection: 'column',
    
  },
  button: {
    borderRadius: 35,
    padding: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontSize: 15,
  },
  greenButton: {
    backgroundColor: '#1aa4b8'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})


