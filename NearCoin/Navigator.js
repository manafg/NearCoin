import {createStackNavigator, createAppContainer} from 'react-navigation';
import LandingPage from './Screens/LandingPage';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import Maps from './Screens/Map';
import Buy from './Screens/Buy';
import DealDetalies from './Screens/DealDetalies';
import BuyingReq from './Screens/BuyingReq';
import myprofile from './Screens/myprofile'
import Escrow from './Screens/Escrow';
import CurrentDeales from './Screens/CurrentDeales'
import StartEscrows from './Screens/StartEscrows';
import Wallet from './Screens/Wallet';
import ReqConf from './Screens/ReqConf'
import Noti from './Screens/Noti'
import chart from './Screens/Chart' 
import NewsFeed from './Screens/NewsFeed'


const MainNavigator = createStackNavigator({
  LandingPage: {screen: LandingPage,  navigationOptions: {
    header: null,
}},
  Signup: {screen: Signup},
  Signin: {screen: Signin},
  Map: {screen: Maps, navigationOptions: {
    header: null,
}},
  NewsFeed  :{screen:NewsFeed},
  Wallet:{screen: Wallet},
  CurrentDeales:{screen:CurrentDeales},
  StartEscrows:{screen:StartEscrows},
  Buy: {screen: Buy },
  Noti: {screen: Noti},
  ReqConf: {screen :ReqConf},
  BuyingReq: {screen: BuyingReq},
  DealDetalies: {screen: DealDetalies},
  Escrow: {screen: Escrow},
  chart : {screen:chart},
  myprofile: {screen:myprofile, nvigationOptions: {
    header: null,
}}
},
{ initialRouteName: "LandingPage"},
);

const Navigator = createAppContainer(MainNavigator);

export default Navigator ;