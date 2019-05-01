import React, { Component } from "react";
import {
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body
} from "native-base";


export default class HeaderC extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate()}
                >
                </Button>
            </Left>
            <Body>
                <Title>{this.props.title}</Title>
            </Body>
           <Right/>
        </Header>
        )
    }
}