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
    Label
} from "native-base";
import { View, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';



class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 2
        }
    }

    switchStep(st) {
        this.setState({
            step: st
            
        })
    }

    render() {
        let deviceWidth = Dimensions.get('window').width
        const {navigate} = this.props.navigation
        return (
            <Container >
                {this.state.step == 2 &&  
                    <View style={{
                        height: 210,
                        marginTop: 140,
                        justifyContent: 'center',
                        alignItems: 'center',
                        resizeMode: 'contain'
                    }}>
                        <Image
                            style={{ width: 180, height: 120, flex: 1 }}
                            source={require('../assets/NearCLogo.png')}
                        />
                    </View>
                }
                {this.state.step == 0  && 
                    <View style={{
                        height: 210,
                        marginTop: 140,
                        justifyContent: 'center',
                        alignItems: 'center',
                        resizeMode: 'contain'
                    }}>
                        <Image
                            style={{ width: 180, height: 120, flex: 1 }}
                            source={require('../assets/NearCLogo.png')}
                        />
                    </View>
                }
                <View style={{ flex: 1, marginTop: 40 }}>
                    {this.state.step == 0 &&
                        <Content padder>
                            <Form>
                                <Item>
                                    <Icon active name="mail" style={{ color: 'grey' }} />
                                    <Input placeholder="Username" />
                                </Item>
                                <Item last>
                                    <Icon active name="lock" style={{ color: 'grey' }} />
                                    <Input placeholder="Password" secureTextEntry />
                                </Item>
                            </Form>
                            <Button onPress={() =>{
                                 this.props.navigation.navigate('Map')}} block style={{ margin: 15, borderRadius: 50, marginTop: 50 }}>
                                <Text>Sign In</Text>
                            </Button>
                            <Button onPress={() => this.switchStep(2)} bordered info  style={{ margin: 15,  borderRadius: 50, marginTop: 10, width:'91%',borderColor:'#fa4169', justifyContent: 'center'}}>
                                <Text style={{color: '#fa4169'}}>Back To Home</Text>
                            </Button>
                        </Content>
                    }
                    {this.state.step == 1 &&
                        <Content >
                            <Form>
                                <Item floatingLabel>
                                    <Label>Chose your Username</Label>
                                    <Input />
                                </Item >
                                <Item floatingLabel>
                                    <Label>Whats Is Your Phone Number</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Label>Whats Is Your Email</Label>
                                    <Input />
                                </Item>
                                <Label style={{ marginLeft: 15, color: '#000', fontSize: 17, marginTop: 18 }}>Create Your Password</Label>
                                <Item >
                                    <Input placeholder="Password" />
                                </Item>
                                <Item>
                                    <Input placeholder="Confirem Password" />
                                </Item>
                            </Form>
                            <Button  onPress={() => navigate("Map")} block style={{ margin: 15, borderRadius: 50, marginTop: 50, flex: 1, zIndex: 999 }}>
                                <Text>Sign Up</Text>
                            </Button>
                            <Button onPress={() => this.switchStep(2)} bordered info  style={{ margin: 15,  borderRadius: 50, marginTop: 10, width:'91%',borderColor:'#fa4169', justifyContent: 'center'}}>
                                <Text style={{color: '#fa4169'}}>Back To Home</Text>
                            </Button>
                        </Content>
                    }

                    {this.state.step == 2 &&
                        <Content >
                            <View style={{ flex: 1 }}>
                                <Button onPress={() => this.switchStep(0)} block style={{ margin: 15, borderRadius: 50, marginTop: 50, zIndex: 999 }}>
                                    <Text>Sign In</Text>
                                </Button>
                            </View>
                            <View style={{ flex: 1 , flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10}}>
                                <Button  style={{ margin: 5, borderRadius: 50, marginTop: 50, height:50, backgroundColor:'#4e6aaf', textAlign: 'center', justifyContent:'center', width:'50%', zIndex: 999 }}>
                                    <Text style={{fontSize:10}}>SIGNIN WITH FACEBOOK</Text>
                                </Button>
                                <Button  style={{ margin: 5, borderRadius: 50,textAlign: 'center', fontSize:10, justifyContent:'center', width:'50%', marginTop: 50, zIndex: 999 }}>
                                    <Text style={{fontSize:10,}}>SIGNIN WITH GOOGLE</Text>
                                </Button>
                            </View>

                        </Content>
                    }
                </View>
                <View style={{
                    height: 10,
                    justifyContent: 'flex-end',
                }}>
                <TouchableOpacity style={{
                            position: 'absolute',
                            width: deviceWidth,
                        }} onPress={() => this.switchStep(1)}>
               
                    <Image  
                        style={{
                           resizeMode: "stretch",
                           width: '100%',
                           height: 90,
                        }}
                        source={require('../assets/Waves.png')}
                    />
                     </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default LandingPage;