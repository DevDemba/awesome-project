import React, { Component } from 'react';
import { View, Button } from 'react-native';
import HalfView from '../components/HalfView';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'my animated',
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
          <HalfView/>

          <Button 
                style={{ width: 50}}
                title="Demba's profile"
                onPress={() => navigate('Profile', {name: 'Profile'})}
            />

          <Button
                title="go back to home"
                onPress={() => navigate('Home', {name: 'Home'})}
            />
            
      </View>
    );
  }
};

