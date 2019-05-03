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
import { View, Image, TouchableHighlight, Dimensions, ScrollView , TouchableOpacity} from 'react-native'
import FooterS from './Com/Footer';
import { MapView } from 'expo';
import CCC from './Com/CCC';


export default class CurrentDeales extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }

    render() {
        let height = Dimensions.get('screen').height;
        let width = Dimensions.get('screen').width;
        const { navigate } = this.props.navigation
        return (
        <View >
         <ScrollView style={{margin:10}}>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigate('DealDetalies')}}>
            <CCC/>
            </TouchableOpacity>
            </ScrollView>
        </View> 
        )
        }
    }