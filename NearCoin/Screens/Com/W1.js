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
import BillAccount from './BillAccount';
 
const deviceWidth = Dimensions.get("window").width;

export default class W1 extends Component {
    render(){
        return (
            <View style={{marginTop:10, padding:10}}>
                <BillAccount/>
                <BillAccount img={true}/>
            </View>
        )
    }
}