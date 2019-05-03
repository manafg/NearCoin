import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import Notif1 from "./Com/Notif1";
import Notif2 from "./Com/Notif2";

class Noti extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Social">
            <Notif1/>
          </Tab>
          <Tab heading="Deals">
            <Notif2/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Noti;