import {createStackNavigator, createAppContainer} from 'react-navigation';
import LandingPage from './Screens/LandingPage';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import Maps from './Screens/Map';
import Buy from './Screens/Buy';
import DealDetalies from './Screens/DealDetalies';
import BuyingReq from './Screens/BuyingReq'


const MainNavigator = createStackNavigator({
  LandingPage: {screen: LandingPage,  navigationOptions: {
    header: null,
}},
  Signup: {screen: Signup},
  Signin: {screen: Signin},
  Map: {screen: Maps, nvigationOptions: {
    header: null,
}},
  Buy: {screen: Buy },
  BuyingReq: {screen: BuyingReq},
  DealDetalies: {screen: DealDetalies}
},
{ initialRouteName: "LandingPage"},
);

const Navigator = createAppContainer(MainNavigator);

export default Navigator ;