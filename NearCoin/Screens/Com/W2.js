import React, { Component } from "react";
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
    Body,
    Item,
    Form,
    Label,
    Input
} from "native-base";
import { StyleSheet, View, Image,Dimensions, ScrollView, TouchableOpacity } from "react-native";
import BillAccount from './BillAccount';


export default class W2 extends Component {
    render() {
        return (
            <View style={{ marginTop: 10, height:1000, padding: 10 }}>
                <BillAccount send={this.props.send} />
                <BillAccount  img={true}  />
                <View style={{flex:1}}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Receiving Bitcoin Address</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Amount to be sent in Bitcoin</Label>
                            <Input  />
                        </Item>
                        <Item floatingLabel >
                            <Label>Description (Optional)</Label>
                        </Item>
                    </Form>
                    <Button onPress={()=>{this.props.nav.navigate('ReqConf')}} block style={{ margin: 15, marginTop: 50 }}>
                        <Text>Send</Text>
                    </Button>
                </View>
            </View>
        )
    }
}