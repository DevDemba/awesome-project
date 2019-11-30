import React, { Component } from 'react';
import { View, Button, Text, FlatList, ActivityIndicator } from 'react-native';


export default class ServiceScreen extends Component {
  static navigationOptions = {
    title: 'My Service',
  }
  
  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      dataSource: '',
      velibLat: 0,
      velibLong: 0
    }
  }


  componentDidMount(){
    return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state')
    .then((response) => response.json())
    .then((respJson) => {
      
      this.setState({
        isLoading: false,
        dataSource: respJson.records,
        velibLat: 2.3488,
        velibLong: 48.8534

      }, function(){
 
      });
      
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  
  
  render() {
    const {navigate} = this.props.navigation;
    
    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
        </View>
        )
      }

      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>

        <Text style={{ flex: 1,  justifyContent: 'center', textAlign: 'center'}}>This is Velib's station in Paris</Text> 
        
        <FlatList  
        data={this.state.dataSource}
        renderItem={({item}) => 
        <Text  style={{ flex: 1,  justifyContent: 'center', textAlign: 'center'}}>
        {item.fields.station_name} -  {item.fields.nbfreeedock} 
      {/*   {item.geometry.coordinates[0]} - {item.geometry.coordinates[1]} */}
        </Text>}
        keyExtractor={({id}, index) => id}
        />
        
        
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
    
    