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
    Badge,
} from "native-base";
import BuyModal from './Com/BuyModal'
import HeaderC from './Com/Header';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from "react-native";
import FooterS from './Com/Footer';
import CCC from './Com/CCC'
import Tba1 from './Com/Tab1'
import Tba2 from './Com/Tab2'
import Tba3 from './Com/Tab3'
import Tba4 from './Com/Tab3'

import { FlatGrid } from 'react-native-super-grid';


class myprofile extends Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <Container >
                <Content  >
                    <BuyModal />
                    <Card style={styles.mb}>
                        <CardItem >
                            <Left>
                                <Thumbnail source={require("../assets/randomPerson.png")} />
                                <Body>
                                    <Text>Raymond Tyler </Text>
                                    <View style={{ width: '100%',marginTop:5, justifyContent: 'center' }} numberOfLines={1} note>
                                        <Text>i love Near Coin</Text>
                                    </View>
                                </Body>
                            </Left>
                            <Right>
                                <IconNB name="md-settings" />
                            </Right>
                        </CardItem>
                        <CardItem style={{ flex: 1, flexDirection: 'column', height: 195 }}>
                            <View style={{ flex: 1, marginTop: 40, flexDirection: 'row', marginLeft: 30, height: 50 }}>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>2451 </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Traades </Text>
                                </View>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>1.2M </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Trusted </Text>
                                </View>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>253 </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Trustee </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', marginLeft: 30 }}>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>1.5hr </Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>Average </Text>
                                </View>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <Badge style={{ backgroundColor:'grey',  width: 24, paddingLeft: .5, paddingRight: .5, marginLeft: 45, height: 24 }}>
                                        <Text>2</Text>
                                    </Badge>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>KYC Level </Text>
                                </View>
                                <View style={{ width: '33.3%', height: 50, justifyContent: 'center' }}>
                                    <IconNB style={{ marginLeft: 45 }} name="md-medal" />

                                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 10, color: '#69707f' }}>4.5/5 </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', marginLeft: 30, height: 200 }}>
                                <View style={{ width: '10%', height: 50, justifyContent: 'center' }}>
                                    <IconNB name="md-mail" />
                                </View>
                                <View style={{ width: '70%', height: 50, justifyContent: 'flex-end' }}>
                                    <Button block bordered info style={{ marginLeft: 50, backgroundColor: 'white', borderRadius: 100, borderWidth: 0.5, borderColor: 'grey' }}>
                                        <Text style={{ color: 'grey' }}>EDIT PROFILE</Text>
                                    </Button>
                                </View>
                            </View>
                        </CardItem>
                    </Card>
                   
                </Content>
                <Tabs style={{ elevation: 4, marginTop:-100 }}>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="star" />
                                </TabHeading>
                            }
                        >
                         <Tba2 nav={ this.props.navigation}/>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="wallet" />
                                </TabHeading>
                            }

                        >
                        <Tba1 nav={ this.props.navigation}/>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="heart" />
                                </TabHeading>
                            }
                        >
                            <Tba2 nav={ this.props.navigation}/>
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="book" />
                                </TabHeading>
                            }
                        >
                           <Tba2 nav={ this.props.navigation}/>
                        </Tab>

                    </Tabs>
                    <View style={{height:70}}>
                <FooterS nav={this.props.navigation} />
                </View>

            </Container>
        );
    }
}

export default myprofile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    mb: {
        width: '100%',

        borderWidth: 0,
        padding: 20,
        marginBottom: 0
    }
});