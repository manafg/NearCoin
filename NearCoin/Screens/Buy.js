import React, { Component } from "react";
import {
  Container,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Form,
  Item,
  Label,
  Input,
  Left,
  Right,
  Constants,
  Body,
  Image,
} from "native-base";
import HeaderC from './Com/Header'
import { MapView } from 'expo';
import { View, Picker, StyleSheet } from 'react-native'


class Buy extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.Text,
    };
  };

  constructor(props){
    super(props);
  }
  
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('Text', 'Buy');
    
    return (
      <Container >
        <Content >
          <Form>
            <Item floatingLabel>
              <Label>CoinType</Label>
              <Input />
            </Item >
            <Item floatingLabel>
              <Label>Fiat Currency</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Commission </Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Payment Method </Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label> Location</Label>
              <Input />
            </Item>
          </Form>
          <MapView
                    style={{ alignSelf: 'stretch', height: 100 }}
                    initialRegion={{
                        latitude: 31.950094,
                        longitude: 35.8860543,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{ 
                            latitude: 31.9499324,
                            longitude:35.8846508
                        }}
                        image={require('../assets/icons_8_ethereum_48.png')}
                        >
                    </MapView.Marker>
                     <MapView.Marker
                        coordinate={{ 
                            latitude: 31.950094,
                            longitude: 35.8860543
                        }}
                        image={require('../assets/icons_8_bitcoin_2.png')}
                    />
                </MapView>
          <Button onPress={() => navigate("Map")} block style={{ margin: 15, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
            <Text>{itemId}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default Buy;