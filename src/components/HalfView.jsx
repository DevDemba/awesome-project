import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';

export default class HalfView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      positionTop: new Animated.Value(Dimensions.get('window').width)
    }
  }

  componentDidMount() {
    Animated.spring(
      this.state.positionTop,
      {
        toValue: 0
      }
    ).start()
  }

  render() {

    return (
     
      <View style={{flex: 1, flexDirection: 'column'}}>

        <Animated.View style={{flex: 0.5, backgroundColor: 'powderblue'}} />
        <Animated.View style={{flex: 0.5, backgroundColor: 'steelblue', Top: this.state.positionTop}} />

      </View>
    );
  }
};

