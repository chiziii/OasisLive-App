import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./scr/screens/sidebar";
import splashScreen from "./scr/screens/splashScreen";
import lessonView from "./scr/screens/lessonView";
import Login from "./scr/screens/Login";
import Register from "./scr/screens/Register";
import Dashboard from "./scr/screens/Dashboard";
import programsList from "./scr/screens/programsList";
import coursesList from "./scr/screens/coursesList";
import lessonsList from "./scr/screens/lessonsList";
import Logout from "./scr/screens/Logout";


const Drawer = DrawerNavigator(
  
  {
    splashScreen: {
      screen: splashScreen,
      navigationOptions: ({navigation}) => ({
        drawerLockMode: 'locked-closed'
      })
     },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      drawerLockMode: 'locked-closed'
    })
   },
   
  Register: {
    screen: Register,
    navigationOptions: ({navigation}) => ({
      drawerLockMode: 'locked-closed'
    })
   },
   
  Dashboard: {
    screen: Dashboard
   },
  
  Programs: {
    screen: programsList
   },
    courses: {screen: coursesList},
    lessons: {screen: lessonsList},
    lessonView:  {screen: lessonView},
    Logout: {screen: Logout}
  },
  {
    initialRouteName: "splashScreen",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);


const Navigation = StackNavigator({
  Drawer: { screen: Drawer, 
     navigationOptions: {
    drawerLabel: () => null,
    drawerheader: "none"
},
},
  splashScreen: {
    screen: splashScreen
   },
Login: {
  screen: Login
 },
 
Register: {
  screen: Register
 },
 
Dashboard: {
  screen: Dashboard
 },

Programs: {
  screen: programsList
 },
  courses: {screen: coursesList},
  lessons: {screen: lessonsList},
  lessonView:  {screen: lessonView},
  Logout: {screen: Logout}
},

{
  initialRouteName: "Drawer",
  headerMode: "screen"
  
});


export default () => 
  <Root>
    <Navigation />
  </Root>
  

