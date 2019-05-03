import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../assets/rand1.jpeg");

class NewsFeed extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem style={{marginBottom:20}}>
              <Left style={{padding:10}}>
                <Thumbnail  source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{padding:20}}>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingLeft: 20 }}>
              <Left>
                <Button transparent>
                <Icon style={{color:'green', paddingRight:10}} name="ios-arrow-dropup-circle" />
                <Icon style={{color:'red'}} name="ios-arrow-dropdown-circle" />
                <Text>40 Vote</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon style={{color:'black'}} name="ios-document" />
                  <Text >40 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-share" />
                  <Text>5 Shares</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem style={{marginBottom:20}}>
              <Left style={{padding:10}}>
                <Thumbnail  source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{padding:20}}>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingLeft: 20 }}>
              <Left>
                <Button transparent>
                <Icon style={{color:'green', paddingRight:10}} name="ios-arrow-dropup-circle" />
                <Icon style={{color:'red'}} name="ios-arrow-dropdown-circle" />
                <Text>40 Vote</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon style={{color:'black'}} name="ios-document" />
                  <Text >40 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-share" />
                  <Text>5 Shares</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem style={{marginBottom:20}}>
              <Left style={{padding:10}}>
                <Thumbnail  source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{padding:20}}>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingLeft: 20 }}>
              <Left>
                <Button transparent>
                <Icon style={{color:'green', paddingRight:10}} name="ios-arrow-dropup-circle" />
                <Icon style={{color:'red'}} name="ios-arrow-dropdown-circle" />
                <Text>40 Vote</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon style={{color:'black'}} name="ios-document" />
                  <Text >40 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-share" />
                  <Text>5 Shares</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={styles.mb}>
            <CardItem style={{marginBottom:20}}>
              <Left style={{padding:10}}>
                <Thumbnail  source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{padding:20}}>
                  NativeBase is a free and source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  builds a layer on top of React Native that provides you with
                  basic set of components for mobile application development.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingLeft: 20 }}>
              <Left>
                <Button transparent>
                <Icon style={{color:'green', paddingRight:10}} name="ios-arrow-dropup-circle" />
                <Icon style={{color:'red'}} name="ios-arrow-dropdown-circle" />
                <Text>40 Vote</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon style={{color:'black'}} name="ios-document" />
                  <Text >40 Comment</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-share" />
                  <Text>5 Shares</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>


        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb: {
    marginBottom: 15
  }
});

export default NewsFeed;