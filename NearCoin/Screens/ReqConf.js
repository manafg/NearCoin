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
    TabHeading,
    View
} from "native-base";


export default class ReqConf extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View >
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#1d1e2c', marginTop:20, fontWeight: 'bold' }}>Transaction Review</Text>
                <Text style={{ textAlign: 'center', color: '#1d1e2c', marginTop: 10 }}>Dear Odai, you are about to send the following Ethereum transaction with the following details:</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 100 }}>Receiving Ethereum Address</Text>
                <Text style={{ textAlign: 'center', fontSize: 13 }}>0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe</Text>
                <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 35 }}> Amount Sent  2 ETH</Text>
                <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 35 }}> Fees On Transaction  0.000002 ETH</Text>
                <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 35 }}> Description: </Text>
                <Text style={{ marginLeft: 35 }}> This is bill renting, this should appear in the history</Text>
                <Text style={{ marginTop: 100, marginLeft: 35, fontSize: 16 }}> 2:49 AM ,Wed 3/20/209</Text>
                <Button  block style={{ margin: 15, marginTop:40, borderRadius: 50, zIndex: 999 }}>
                    <Text>Confirm</Text>
                </Button>
            </View>
        )
    }
}