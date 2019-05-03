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
    Body
} from "native-base";
import { MapView } from 'expo';
import { StyleSheet, View, Image, Dimensions , ScrollView , TouchableOpacity} from "react-native";
import StarRating from 'react-native-star-rating';
import CCC from './CCC';
 
const deviceWidth = Dimensions.get("window").width;

export default class Tab1 extends Component {
    componentDidMount(){
        this.props.nav.navigate('Wallet')
    }
    render(){
        return (
            <View>
               
            </View>
        )
    }
}