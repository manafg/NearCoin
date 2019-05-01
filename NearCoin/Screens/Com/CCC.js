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
    Left,
    Right,
    IconNB,
    Body
} from "native-base";
import { StyleSheet, View, Image, Dimensions } from "react-native";

export default class CCC extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{
                height: 150, width: '100%', backgroundColor: '#ffffff', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: '#d6d7da',
                elevation: 5,
                borderRadius: 8,
                padding: 20,
                marginBottom: 15
            }}>
                <View style={{ position: 'absolute',  }}>
                    <View style={{width: 100, height:'80%' }}>
                    <Thumbnail source={require("../../assets/randomPerson.png")} style={{ left: 20, top: 10 }} />
                    <Text style={{ left: 20, top: 30, fontSize: 10, width:40,  borderBottomWidth: .5 }}> 3 KM </Text>
                    <Text style={{ left: 20, top: 30, fontSize: 10, width:60}}> Rate  3.5/5 </Text>
                    </View>
                </View>
                <View>
                <View style={{width: 1, bordertWidth: 2, height:'95%' , top:0, backgroundColor:'grey', left :80}}></View>
  
                <IconNB name="md-share" style={{left:100, bottom: 130}}/>
                
                </View>
                <IconNB name="md-mail" style={{left:320, bottom: 140}}/>
                <Text style={{left:160, color:'grey', bottom: 140}}> Amman,Jordan </Text>
                <Text style={{left: 100,fontSize:12, color:'grey', bottom: 140}}> Method </Text>
                <Text style={{left: 160,fontSize:12, color:'grey', bottom: 155}}> Type </Text>
                <Text style={{left: 200,fontSize:12, color:'grey', bottom: 170}}> Price </Text>
                <Text style={{left: 250,fontSize:12, color:'grey', bottom: 185}}> Commission </Text>

                <Text style={{left: 100,fontSize:12, color:'grey', bottom: 170}}> Paypal </Text>
                <Text style={{left: 160,fontSize:12, color:'grey', bottom: 185}}> BTC </Text>
                <Text style={{left: 200,fontSize:12, color:'grey', bottom: 200}}> $4,000 </Text>
                <Text style={{left: 270,fontSize:12, color:'grey', bottom: 215}}> 1% </Text>
                
                
                


            </View>
        )
    }
}