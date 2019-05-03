import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading
} from "native-base";
import W1 from './Com/W1';
import W2 from './Com/W2';
import W3 from './Com/W3'

export default class Wallet extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title> Advanced Tabs</Title>
          </Body>
          <Right />
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-arrow-dropdown" />
                <Text>Receive</Text>
              </TabHeading>
            }
          >
          <W1/>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-arrow-dropup" />
                <Text>Send</Text>
              </TabHeading>
            }
          >
          <W2 send={true} nav={this.props.navigation}/>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-clock" />
                <Text>History</Text>
              </TabHeading>
            }
          >
          <W3/>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="caretleft" />
                <Text>FAQ'S</Text>
              </TabHeading>
            }
          >
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
