import React, { Component } from 'react';
import { View, Animated, Dimensions, Button, Text } from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      positionTop: new Animated.Value(Dimensions.get('window').width)
    }
  }

  static navigationOptions = {
    title: 'Welcome',
  };
  
  componentDidMount() {
    Animated.spring(
      this.state.positionTop,
      {
        toValue: 0
      }
    ).start()
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>

        <Text style={{textAlign: 'center'}}>Welcome to my Home page</Text>

        <Button
          style={{width: 50, marginTop: 20}}
          title="Demba's profile"
          onPress={() => navigate('Profile', {name: 'Profile'})}
        />

        <Button
          style={{width: 50}}
          title="Demba's service"
          onPress={() => navigate('Service', {name: 'Service'})}
        />

        <Button
        style={{width: 50}}
        title="Demba's animated"
        onPress={() => navigate('Animated', {name: 'Animated'})}
        />

        <Button
        style={{width: 50}}
        title="Demba's map"
        onPress={() => navigate('Map', {name: 'Map'})}
        />

        </View>
    );
  }
};

