import React, { Component } from "react";
import { StyleSheet , Image} from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Footer,
    FooterTab,
    Text,
    Body,
    Left,
    Right,
    Icon
} from "native-base";

class FooterS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: true
        };
    }

    toggleTab5 (){
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            tab5: true
        });
        this.props.nav.navigate('Map')
    }

    toggleTab1(nav) {
        this.setState({
            tab5: false,
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        });
        this.props.nav.navigate('NewsFeed')
    }

    toggleTab2(nav) {
        this.setState({
            tab5: false,
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false
        });
        this.props.nav.navigate('chart')
    }

    toggleTab3(nav) {
        this.setState({
            tab5: false,
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        });
        this.props.nav.navigate('Noti')
    }

    toggleTab4(nav) {
        this.setState({
            tab5: false,
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true
        });
        this.props.nav.navigate('myprofile')
    }

    render() {
        return (
            <Container style={styles.container}>
                <Footer style={{padding : 10}} >
                    <FooterTab>
                        <Button  vertical active={this.state.tab1} onPress={() => this.toggleTab1()}>
                            <Icon  active={this.state.tab1} name="md-paper" />
                        </Button>
                        <Button vertical active={this.state.tab2} onPress={() => this.toggleTab2()}>
                            <Icon active={this.state.tab2} name="ios-pulse" />
                        </Button>
                        <Button style={{}} vertical active={this.state.tab5} onPress={() => this.toggleTab5()}>
                        <Image
                            style={{ width: 40, height: 40}}
                            source={require('../../assets/NearCLogo.png')}
                        />
                        </Button>
                        <Button vertical active={this.state.tab3} onPress={() => this.toggleTab3()}>
                            <Icon active={this.state.tab3} name="ios-notifications" />
                        </Button>
                        <Button vertical active={this.state.tab4} onPress={() => this.toggleTab4( )}>
                            <Icon active={this.state.tab4} name="contact" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});

export default FooterS;