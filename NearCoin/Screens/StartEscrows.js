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
import StartEscrow from './Com/startEscrow';


export default class StartEscrows extends Component {

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
        let type = this.props.navigation.getParam('type', 'null')
         type = type == '3 Sell' ? type : null
        return (
        <View >
         <ScrollView style={{margin:10}}>
            
         <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                if(type) {
                    navigate('Map')
                } else
                 navigate('Escrow')
                 }
                 }>
            <StartEscrow type={type}/>
            </TouchableOpacity>
            </ScrollView>
        </View> 
        )
        }
    }