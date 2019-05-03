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
    Label,
} from "native-base";
import BuyModal from './Com/BuyModal'
import { View, Image, TouchableHighlight } from 'react-native'
import FooterS from './Com/Footer';
import { MapView } from 'expo';

import StarRating from 'react-native-star-rating';

class DealDetalies extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('Text', 'Buying');
        const Path = navigation.getParam('Path', 'null');
        return (<Container>
            <Content >
          <BuyModal info={itemId} show={this.state.show}/>
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
                        <Label>Deal Type</Label>
                        <Input disabled={itemId ? true : false} value={itemId == 'Buying' || itemId== '3 Buying' ? 'Sell' : 'Buy'} />
                    </Item >
                    <Item floatingLabel>
                        <Label>CoinType</Label>
                        <Input disabled={itemId ? true : false}  value={itemId ? 'BTC' : ''} />
                    </Item >
                    <Item floatingLabel>
                        <Label>Fiat Currency</Label>
                        <Input  disabled={itemId ? true : false}  value={itemId ? 'USD' : ''} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Commission </Label>
                        <Input disabled={itemId ? true : false}  value={itemId ? '1%' : ''} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Payment Method </Label>
                        <Input disabled={itemId ? true : false}  value={itemId ? 'Cash' : ''} />
                    </Item>
                    <Item floatingLabel>
                        <Label>Amount </Label>
                        <Input disabled={itemId ? true : false}  value={itemId ? '1 BTC = $ 4,000' : ''} />
                    </Item>
                    <Item floatingLabel>
                        <Label> Location</Label>
                        <Input disabled={itemId ? true : false}  />
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
                <Button onPress={() =>{ 
                    if(Path == 'null'){
                    this.setState({show : true})
                    } else{
                        this.props.navigation.navigate('StartEscrows', {type :itemId })
                    }
                    }} block style={{backgroundColor: itemId == 'Buying' ? "#4380ff" : '#fa4169', margin: 15, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
                    <Text> {itemId} Request</Text>
                </Button>
            </Content>
        </Container>)
    }
}
export default DealDetalies;