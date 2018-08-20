import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image } from 'react-native';
import { Container,Card, CardItem, Icon} from "native-base";
import { Drawer } from 'native-base';
import StatusBar from 'react-native-custom-statusbar'

export default class coursesList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#184E68",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: "     Courses",
    headerLeft:
    <View style={{paddingLeft:16}}>
        <Icon style={{color: "#fff"}}
            name="md-menu"
            size={30}
            onPress={() => navigation.navigate("DrawerOpen")} />
    </View>,
})

  constructor(props) {
    super(props);
    this.state = { isLoading: true }

  }

  renderItem = ({ item }) => {
    return (
      <View>

        <Card>
          <CardItem button onPress = {() =>this.props.navigation.navigate("lessons")}
          style={{ flex: 1, flexDirection: "column" }}>
            <Image source={{ uri: item.Featured_Image }}
              style={styles.imageView}
            />
            <View style={styles.textView} >
              <Text>
                {"Title: " + item.title}
              </Text>
              <Text>
                {"Program: " +  item.program}
              </Text>
              <Text >
                {"Price: " + item.price}
              </Text>
              <Text>
                {"Description: " + item.Description}
              </Text>
            </View>
          </CardItem>
        </Card>
      </View>
    )
  }

  // itemSeparator = () => {
  //   return (
  //     <View
  //       style = {{ height: 1, width: 400, backgroundColor: '#333' }}>
  //     </View>
  //   )
  // }

  componentDidMount() {
    return fetch('https://learnbase.com.ng/api/courses?program_uuid=b0dc8dbc-8e91-11e8-b3e7-0a831060a042')
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
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
          // ItemSeparatorComponent={this.itemSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    margin: 5,
    flexDirection: "row"

  },

  imageView: {

    width: 150,
    height: 100,
    margin: 7,
    borderRadius: 7

  },

  textView: {

    padding: 4,
    color: '#000',
    textAlign: 'left',
    fontWeight: "bold",

  }

});