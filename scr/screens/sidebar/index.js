import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";



const drawerCover = require("../../../images/back.jpeg");
//const drawerImage = require("../../../images/.jpeg");
const datas = [

  {
    name: "Home",
    route: "Dashboard",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Programs",
    route: "Programs",
    icon: "albums",
    bg: "#C5F442",
    types: "6"
  },
  {
    name: "Courses",
    route: "courses",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Lessons",
    route: "lessons",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Logout",
    route: "Logout",
    icon: "paper",
    bg: "#48525D"
  }
];


class SideBar extends Component {

  static navigationOptions = { title: 'Welcome', header: null };

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Image source={drawerCover} style={styles.drawerCover} />
         

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
//<Image square style={styles.drawerImage} source={drawerImage} />