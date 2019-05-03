import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Card,
    CardItem,
    Thumbnail,
    Footer,
    FooterTab,
    Left,
    Right,
    Tabs,
    Tab,
    TabHeading,
    Body,
    IconNB,
} from "native-base";
import { View, Image, TouchableHighlight } from 'react-native'

export default class Escrow extends React.Component {
    render() {
        const { navigation } = this.props;
        const seller = navigation.getParam('seller', false);
        return (
            <Container >
                <Content >
                    <Card >
                        <CardItem >
                            <Left>
                                <Body>
                                    <Text style={{ fontSize: 25 }}>Escrow info</Text>
                                </Body>
                            </Left>
                            <Right>
                                <IconNB name="md-settings" />
                            </Right>
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'column', height: 195 }}>
                            <View style={{ flex: 1, marginTop: 40, flexDirection: 'row', marginLeft: 30, height: 50 }}>
                                <View style={{ width: '50%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Amount </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>1 BTC </Text>
                                </View>
                                <View style={{ width: '50%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>State </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Started </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', marginLeft: 30 }}>
                                <View style={{ width: '50%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Started at </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Average </Text>
                                </View>
                                <View style={{ width: '50%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Timer </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>2D</Text>
                                </View>
                            </View>
                        </CardItem>

                    </Card>
                    <View style={{
                    }}>
                        <Image
                            style={{ marginLeft: 40, resizeMode: 'contain', width: 350, height: 520, flex: 1 }}
                            source={require('../assets/Escrow.png')}
                        />
                    </View>
                    {seller &&
                    <Button onPress={() => this.setModalVisible(false)} block style={{ backgroundColor: '#fa4169', margin: 15, borderRadius: 50, marginTop: 50, zIndex: 999 }}>
                        <Text style={{ color: 'white' }}>Payment Sent</Text>
                    </Button>
                    }
                </Content>
            </Container>
        )
    }
}

