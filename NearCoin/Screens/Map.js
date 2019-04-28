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
import { View, Image, TouchableHighlight } from 'react-native'
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
        const { navigate } = this.props.navigation
        return (
            <View>
                <Button  onPress={() => { navigate('Buy', { Text: 'Search' }) }}  bordered info style={{ margin: 15, borderRadius: 50, zIndex:999,  position: 'absolute', top:15, width: '91%', backgroundColor:'white'  }}>
                    <Icon active name="search" />
                    <Text><Text style={{color:'gray'}}>you can search for dealers</Text> <Text style={{ color: 'blue' }}> HERE</Text> </Text>
                </Button>
                <MapView
                    style={{ alignSelf: 'stretch', height: 650 }}
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
                        <MapView.Callout tooltip >
                            <TouchableHighlight underlayColor='#dddddd'>
                                <View>
                                    <Text>dadasda dasdasd</Text>
                                </View>
                            </TouchableHighlight>
                        </MapView.Callout>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{
                            latitude: 31.950094,
                            longitude: 35.8860543
                        }}
                        image={require('../assets/icons_8_bitcoin_2.png')}
                    />
                </MapView>

                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: "#5067FF" }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}
                >
                    <IconNB name="md-share" />

                    <Button onPress={() => { navigate('BuyingReq', { Text: 'Buy' }) }} style={{ backgroundColor: "#3B5998" }}>
                        <IconNB name="ios-return-left" />
                    </Button>
                    <Button onPress={() => { navigate('BuyingReq', { Text: 'Sell' }) }} disabled style={{ backgroundColor: "#DD5144" }}>
                        <Icon name="ios-return-right" />
                    </Button>
                </Fab>
                <FooterS />
            </View>
        )
    }
}
export default Maps;