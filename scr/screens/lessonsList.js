import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, } from 'react-native';
import { Container,Card, CardItem, Icon} from "native-base";
import { WebView } from 'react-native';


export default class lessonsList extends React.Component {

  
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#184E68",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: "     Lessons",
    headerLeft:
    <View style={{paddingLeft:16}}>
        <Icon style={{color: "#fff"}}
            name="md-menu"
            size={30}
            onPress={() => navigation.navigate("DrawerOpen")} />
    </View>,
});



  constructor(props) {
    super(props);
    this.state = { isLoading: true }

  }

  renderItem = ({ item }) => {
    return (
      <View>
        <Card>
          <CardItem style={{flex: 1, flexDirection: "column" }} >
                <WebView
        source={{uri: item.lesson_video_url}}
        style={{marginTop: 20,width: 300, height: 200}}
      />
            <View style={styles.textView}>
              <Text>
                {"Title: " + item.title}
              </Text>
              <Text>
                {"Course: " +  item.course}
              </Text>
              <Text >
                {"Lesson Type: " + item.lesson_type}
              </Text>
              <Text>
                {"Date: " + item.created_at}
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
    return fetch('https://learnbase.com.ng/api/lessons?course_uuid=f2da82ca-8ea8-11e8-9913-0a831060a042')
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
    color: '#000',
    textAlign: "left",
    marginLeft: 0

  }

});