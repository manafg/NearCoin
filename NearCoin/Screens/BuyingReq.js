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
                    <Card style={styles.mb}>
                        <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                            <Left>
                                <Thumbnail source={require("../assets/randomPerson.png")} />
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
                                <Button onPress={() => navigate("Map")} block style={{ margin: 10, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
                                    <Text>Start Escrow</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
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