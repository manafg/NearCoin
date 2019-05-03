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
    IconNB,
    Left,
    Right,
    Body
} from "native-base";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import StarRating from 'react-native-star-rating';


export default class StartEscrow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card style={styles.mb}>
                <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                    <Left>
                        {this.props.img ?
                            <Thumbnail style={{ width: 50, height: 50 }} source={require(`../../assets/ETH.png`)} />
                            :
                            <Thumbnail style={{ width: 50, height: 50 }} source={require(`../../assets/BTC.png`)} />
                        }
                        <Body>
                            <Text>
                            {this.props.img ?
                                '0.00000001 ETH ≈ 0.08 JOD' 
                                :
                                '0.00000001 BTC ≈ 0.01 JOD' 
                            }
                            </Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                    <Body>
                        <Text style={{ fontSize: 10, marginTop: 20, marginLeft: 20 }}>
                        {this.props.img ?
                                'YOUR ETHRIOM ADDDRESS' 
                                :
                                'YOUR BITCOIN ADDDRESS' 
                            }
                            
                     </Text>
                        <Text style={{ fontSize: 10, marginTop: 0, marginLeft: 20 }}>
                        {this.props.img ?
                            '0x336vzxRDJvzK2cxevarNrngJpY3dbh7Cgq'
                            :
                            '336vzxRDJvzK2cxevarNrngJpY3dbh7Cgq'
                        }
                      </Text>
                    </Body>
                    <Right>
                        { !this.props.send ?
                            <IconNB name="md-copy" />
                            :
                            <IconNB name="ios-checkmark-circle" style={{color: 'green'}} />
                        }
                    </Right>
                </CardItem>
            </Card>
        )

    }
}

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