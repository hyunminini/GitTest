import React from 'react';
import {Text, View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../slices';
import qs from 'qs';
import AuthApp from './components/AuthApp';
import MyList from './components/DATA';
import Profile from './components/Profile';
import TodoApp from './components/TodoApp';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button title="열기" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
}

function SettingScrren({navigation}) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

// const store = createStore(rootReducer);
qs.stringify;
qs.parse;
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={SettingScrren} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

//   <Provider store={store}>
//     {/* 리덕스 Todo Test */}
//     {/* <TodoApp /> */}
//     <Profile
//       name="hyunmin"
//       isActive={true}
//       image="https://picsum.photos/200">
//       <Text>나 ^^</Text>
//       <Text>하이하이</Text>
//     </Profile>
//     {/* FlashList Test */}
//     {/* <MyList /> */}
//   </Provider>;
