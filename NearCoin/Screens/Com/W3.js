import React, { Component } from "react";
import {
    Container,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Item,
    Input,
    Left,
    Form,
    Right,
    Body,
    Fab,
    IconNB,
    Label
} from "native-base";
import { View, Image, TouchableHighlight, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import CCC from './CCC';


export default class W3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }

    render() {
        let height = Dimensions.get('screen').height;
        let width = Dimensions.get('screen').width;
        return (
            <View >
                <ScrollView style={{ margin: 10 }}>
                    <CCC />
                    <CCC />
                    <CCC />
                    <CCC /> 
                     <CCC /> 
                    <CCC />
                     <CCC /> 
                    <CCC />
                     <CCC /> 
                     <CCC />
                </ScrollView>
            </View>
        )
    }
}