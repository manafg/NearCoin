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
    Tab,
    Tabs
} from "native-base";
import { MapView } from 'expo';
import { StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating';
import CCC from './CCC';
import W3 from './W3'

const deviceWidth = Dimensions.get("window").width;

export default class Tab2 extends Component {
    render() {
        return (
            <View style={{ height:1000, marginTop: 10, padding: 10 }}>
                <Tabs style={{height:1000}}>
                    <Tab style={{paddingTop:20}} heading="Deal">
                        <ScrollView  style={{height:1000}}>
                            <TouchableOpacity onPress={() => { this.props.nav.navigate('DealDetalies', { Text: '3 Buying', Path: 'StartEscrow' }) }}>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.nav.navigate('DealDetalies', { Text: '3 Sell', Path: 'StartEscrow' }) }}>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CCC />
                            </TouchableOpacity>
                        </ScrollView>
                    </Tab>
                    <Tab  style={{paddingTop:20}} heading="Active Deales">
                    <ScrollView  >
                            <TouchableOpacity onPress={() => { this.props.nav.navigate('DealDetalies', { Text: '3 Buying', Path: 'StartEscrow' }) }}>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CCC />
                            </TouchableOpacity>
                        </ScrollView>
                    </Tab>
                    <Tab  style={{paddingTop:20}} heading="Escrow">
                    <ScrollView  >
                            <TouchableOpacity onPress={() => { this.props.nav.navigate('Escrow', { Text: 'Escrow'}) }}>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => { this.props.nav.navigate('Escrow', { Text: 'Escrow', seller: true}) }}>
                                <CCC />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CCC />
                            </TouchableOpacity>
                        </ScrollView>
                    </Tab>
                    
                </Tabs>

            </View>
        )
    }
}