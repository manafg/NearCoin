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
import HeaderC from './Com/Header'
import { MapView } from 'expo';
import { StyleSheet, View, Image, Dimensions } from "react-native";
import StarRating from 'react-native-star-rating';
import StartEscrow from './Com/startEscrow';
import CCC from './Com/CCC';
import BillAccount from './Com/BillAccount'
 
const deviceWidth = Dimensions.get("window").width;

class BuyingReq extends Component {



    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.Text,
        };
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('Text', 'Buy');

        return (
            <Container style={styles.container}>

                <Content padder>
                   <StartEscrow />
                   <CCC/>
                   <BillAccount/>
                </Content>
            </Container>
        )
    }
}

export default BuyingReq;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    mb: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
        padding: 20,
        marginBottom: 15
    }
});