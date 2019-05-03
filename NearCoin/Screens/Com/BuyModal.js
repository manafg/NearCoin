import React, { Component } from 'react';
import Modal from "react-native-modal";
import {
  Card,
  CardItem,
  Thumbnail,
  Footer,
  FooterTab,
  Left,
  Body,
  IconNB,
  Item,
  Input,
  Right,
  Button
} from 'native-base'
import { TouchableOpacity, Text, TouchableHighlight, View, Alert } from 'react-native';

export default class BuyModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: props.show ? props.show : false,
    };
  }
  

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentWillReceiveProps(props){
    this.setState({
      modalVisible: props.show
    })
  }

  render() {
    return (
      <Modal style={{ marginTop: 100 }} isVisible={this.state.modalVisible}  >
        <View style={{ flex: 1, borderRadius:100 }}>
          <Card bordered style={{ borderTopLeftRadius: 8, height: 500, borderTopRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, }}>
            <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, }} >
              <Left>
                <TouchableOpacity onPress={()=>{ this.setModalVisible(false)}}>
                <Text style={{ fontSize: 40, left: 20, top: 3 }}>x</Text>
                </TouchableOpacity>
                <Body>
                  <Text style={{ fontSize: 25, left: 40, top: 3 }}>{this.props.info} Request</Text>
                </Body>
              </Left>
              <Right>

              </Right>
            </CardItem>
            <View style={{paddingHorizontal:50, marginTop:10, paddingVertical:10}}>
            <Text style={{ color: '#69707f' }}> How much do you want to buy?</Text>
              <Item style={{  }}>
                <Input style={{ backgroundColor: '#f7f7fb' }} placeholder="1 BTC" />
              </Item>
              </View>
              <View style={{paddingHorizontal:50, marginTop:10, paddingVertical:10}}>
              <Text style={{ color: '#69707f' }}> Note (Optional)</Text>
              <Item >
                <Input multiline={true}
                  numberOfLines={4} style={{ height:120,backgroundColor: '#f7f7fb' }} placeholder="Note...." />
              </Item>
              </View>
            <Text style={{fontSize:20,marginLeft:50, marginTop:50}}>
              1 BTC = $3,500
            </Text>
            <Button onPress={() => this.setModalVisible(false)} block style={{ backgroundColor: this.props.info == 'Buying' ? "#4380ff" : '#fa4169', margin: 15, borderRadius: 50, marginTop: 50, zIndex: 999 }}>
              <Text style={{ color:'white'}}>SEND REQUEST</Text>
            </Button>
            <CardItem  style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }} ></CardItem>
          </Card>
        </View>
      </Modal>
    );
  }
}