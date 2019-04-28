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
    List,
    ListItem,
    Thumbnail,
    IconNB,
    Label
} from "native-base";
import { View, Image, TouchableHighlight } from 'react-native'
import FooterS from './Com/Footer';
import { MapView } from 'expo';

import StarRating from 'react-native-star-rating';

class DealDetalies extends Component {
    render() {
        return (<Container>
            <Content >
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail small source={require("../assets/randomPerson.png")} />
                        </Left>
                        <Body>
                            <Text>Jackson Maxwell</Text>
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
                        <Right>
                        </Right>
                    </ListItem>
                </List>
                <Form>
                    <Item floatingLabel>
                        <Label>CoinType</Label>
                        <Input />
                    </Item >
                    <Item floatingLabel>
                        <Label>Fiat Currency</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Commission </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Payment Method </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label> Location</Label>
                        <Input />
                    </Item>
                </Form>
                <MapView
                    style={{ alignSelf: 'stretch', height: 100 }}
                    initialRegion={{
                        latitude: 31.950094,
                        longitude: 35.8860543,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.9499324,
                            longitude: 35.8846508
                        }}
                        image={require('../assets/icons_8_ethereum_48.png')}
                    >
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.950094,
                            longitude: 35.8860543
                        }}
                        image={require('../assets/icons_8_bitcoin_2.png')}
                    />
                </MapView>
                <Button onPress={() => navigate("Map")} block style={{ margin: 15, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
                    <Text>Buying Request</Text>
                </Button>
            </Content>
        </Container>)
    }
}
export default DealDetalies;