import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
          <Text style={{ flex: 1,  justifyContent: 'center', textAlign: 'center'}}>This is my profile</Text>
          <Button
                title="My Service Api"
                onPress={() => navigate('Service', {name: 'Service'})}
            />
          <Button
            title="go back to home"
            onPress={() => navigate('Home', {name: 'Demba'})}
        />
      </View>
    );
  }
};

