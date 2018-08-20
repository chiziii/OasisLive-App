import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image, BackHandler, Button } from 'react-native';
import { Container,Card, CardItem, Icon, Content, Left, Header, Body, Title, Right} from "native-base";
import StatusBar from "react-native-custom-statusbar";
//import FAB from "../FAB";
 
export default class programsList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#184E68",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: "     Programs",
    headerLeft:
    <View style={{paddingLeft:16}}>
        <Icon style={{color: "#fff"}}
            name="md-menu"
            size={30}
            onPress={() => navigation.navigate("DrawerOpen")} />
    </View>,
})


componentDidMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
 
  return true;
}


  constructor(props) {
    super(props);
    this.state = { isLoading: true }

  }

  

  renderItem = ({ item }) => {

    return (
<View>
      <StatusBar backgroundColor="#184E68" />
      <View>
        <Card>
          <CardItem style={{flex: 1, flexDirection: "column" }}>
            <View style={styles.textView}>
              <Text>
                {"Title: " + item.name}
              </Text>
              <Text>
                {"Description: " + item.Description}
              </Text>
              <Text >
                {"Date: " + item.created_at}
              </Text>
            </View>
            <Button success 
             title="Enroll"
             style = {{marginLeft: 90}}
             button onPress = {() =>this.props.navigation.navigate("courses")}>
            <Text>Enroll</Text>
          </Button>
          </CardItem>
        </Card>

      </View>

      </View>
    )
  }


  componentDidMount() {
    return fetch('https://learnbase.com.ng/api/programs?company_uuid=179357fa-80fc-11e8-a375-0a831060a042')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);

      });
  }
  
  render() {

    if (this.state.isLoading) {
      return (
        <Container>
          <ActivityIndicator />
        </Container>
      )
    }
    return (
      <Container style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
          // ItemSeparatorComponent={this.itemSeparator}
        />
      </Container>
    );
  }

}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    margin: 5,
    flexDirection: 'column'

  },

  imageView: {

    width: 300,
    height: 100,
    margin: 7,
    borderRadius: 7

  },

  textView: {

    padding: 4,
    color: '#fff',
    textAlign: 'left',

  },
  icon: {
    width: 24,
    height: 24,
  },
});






