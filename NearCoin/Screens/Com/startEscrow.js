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
    IconNB,
    Left,
    Right,
    Body
} from "native-base";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import StarRating from 'react-native-star-rating';


export default class StartEscrow extends React.Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <Card style={styles.mb}>
            <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Left>
                    <Thumbnail source={require("../../assets/randomPerson.png")} />
                    <Body>
                        <Text>Raymond Tyler </Text>
                        <View style={{ width: '20%', justifyContent: 'center' }} numberOfLines={1} note>
                            <StarRating
                                starSize={20}
                                disabled={true}
                                maxStars={5}
                                rating={4}
                                fullStarColor={'#FFD700'}
                            />
                        </View>
                    </Body>
                </Left>
            </CardItem>

            <CardItem>
                <Body>
                    <Text style={{ marginTop: 20, marginLeft: 20 }}>
                        Amount
    </Text>
                    <Text style={{ marginTop: 0, marginLeft: 20 }}>
                        1 BTC = $ 4,000
    </Text>
                    <Text style={{ marginTop: 10, marginLeft: 20 }}>
                        "I am willing to meet you!"
    </Text>
                </Body>
            </CardItem>
            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, paddingVertical: 0, }}>
                <Body>
                    <Button  block style={{ margin: 10, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
                        <Text>{this.props.type== '3 Sell' ? 'Sellect Seller':'Start Escrow'}</Text>
                    </Button>
                </Body>
            </CardItem>
        </Card>
        )

    }
}

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