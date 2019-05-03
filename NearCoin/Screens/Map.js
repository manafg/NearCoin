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
import { View, Image, TouchableHighlight, Dimensions } from 'react-native'
import FooterS from './Com/Footer';
import { MapView } from 'expo';


class Maps extends Component {

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
                <Button onPress={() => { navigate('Buy', { Text: 'Search', path: 'CurrentDelaes' }) }} bordered info style={{ margin: 15, borderRadius: 50, zIndex: 999, position: 'absolute', top: 70, width: '91%', backgroundColor: 'white' }}>
                    <Icon active name="search" />
                    <Text><Text style={{ color: 'gray' }}>you can search for dealers</Text> <Text style={{ color: 'blue' }}> HERE</Text> </Text>
                </Button>
                <MapView
                    style={{ alignSelf: 'stretch', height: height - 70 }}
                    initialRegion={{
                        latitude: 31.9339614,
                        longitude: 35.924008,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.933388,
                            longitude: 35.9329433
                        }}
                        onPress={() => navigate('DealDetalies', { Text: 'Selling' }) }
                        image={require('../assets/EthBuy.png')}
                    ></MapView.Marker>
                     <MapView.Marker
                        coordinate={{
                            latitude:31.9339614,
                            longitude: 35.924008
                        }}
                        onPress={() => navigate('DealDetalies', { Text: 'Selling' }) }
                        image={require('../assets/EthBuy.png')}
                    ></MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.9307383,
                            longitude: 35.9272526
                        }}
                        onPress={() => navigate('DealDetalies', { Text: 'Buying' }) }
                        image={require('../assets/SellBtcDrop.png')}
                        
                    >
                        <MapView.Callout onCalloutPress={() => { navigate('BuyingReq', { Text: 'Selling' }) }} >
                        </MapView.Callout>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.9434131,
                            longitude: 35.9267509
                        }}
                        onPress={() => navigate('DealDetalies', { Text: 'Buying' }) }
                        image={require('../assets/SellBtcDrop.png')}
                        
                    >
                        <MapView.Callout onCalloutPress={() => { navigate('BuyingReq', { Text: 'Selling' }) }} >
                        </MapView.Callout>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.950094,
                            longitude: 35.8860543
                        }}
                        image={require('../assets/EthBuy.png')}
                        onPress={() => navigate('DealDetalies', { Text: 'Selling' }) }
                    />
                    <MapView.Callout onCalloutPress={() => { navigate('BuyingReq', { Text: 'Selling' }) }} >
                        </MapView.Callout>
                </MapView>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ backgroundColor: 'transparent' }}
                    style={{ backgroundColor: 'transparent' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}
                >
                    <Image
                        source={require('../assets/Fap.png')}
                    />

                    <Button style={{ backgroundColor: 'transparent' }} onPress={() => { navigate('Buy', { Text: 'Buy' }) }} style={{ backgroundColor: "#3B5998" }}>
                        <Image
                            style={{ width: 68, height: 68, marginTop: 6 }}
                            source={require('../assets/BuyFab.png')}
                        />
                    </Button>
                    <Button style={{ backgroundColor: 'transparent' }} onPress={() => { navigate('Buy', { Text: 'Sell' }) }}  style={{ backgroundColor: "#DD5144" }}>
                        <Image
                            style={{ width: 68, height: 68, marginTop: 6 }}
                            source={require('../assets/SellFab.png')}
                        />
                    </Button>
                </Fab>
                <FooterS nav={this.props.navigation} />
            </View>
        )
    }
}
export default Maps;