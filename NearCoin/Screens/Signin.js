import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
    Image,
} from "native-base";

import { View } from 'react-native'


class Signin extends Component {
    render() {
        return (
            <Container >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: '../assets/group_184.png' }}
                    />
                </View>
            </Container>
        );
    }
}

export default Signin;