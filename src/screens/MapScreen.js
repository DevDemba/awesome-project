import React, { Component } from 'react';
import { View, Button, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker} from 'react-native-maps';


export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'My Map',
  }
  
  constructor(props){
    super(props);
    this.state = {
      data: 'loading to geolocalisation',
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      position: {
      initialPositionLatitude: 0,
      initialPositionLongitude: 0,
      latitudeDelta: 0.00522,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.00522
      },
      watchID: number = null
    }
  }
  
  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'This is geolocalisation of velib'
      })
    }, 1000)
  }
  
  componentDidMount = () => {
    this.getData();
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        const initialPositionLatitude = position.coords.altitude;
        const initialPositionLongitude = position.coords.longitude;
        
        this.setState({ initialPosition, initialPositionLatitude, initialPositionLongitude });
        console.log("initial position fetch", initialPosition)
       
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
        const lastPosition = JSON.stringify(position);
        this.setState({ lastPosition });
        console.log("last position fetch")
      });
    }

    onRegionChange(region, lastLat, lastLong) {
      this.setState({
          mapRegion: region,
          lastLat: lastLat || this.state.lastLat,
          lastLong: lastLong || this.state.lastLong
      });
  }
    
 /*    componentWillUnmount = () => {
      navigator.geolocation.clearInterval(this.watchID);
    } */
 

    render() {
      
      const {navigate} = this.props.navigation;
      
      return (
        <View style={{ flex: 1, flexDirection: 'column'}}>
        <View style={{ flex: 0.3,  justifyContent: 'center'}}>
        <Text style={{ flex: 1,  justifyContent: 'center', textAlign: 'center'}}>{this.state.data}</Text> 
        
        <Text>
        Initial position:
        </Text>
        
        <Text>
        {this.state.initialPosition}
        </Text>
        
        <Text>
        Current position:
        </Text>
        
        <Text>
        {this.state.lastPosition}
        </Text>
        
        </View>
        <MapView
        style={{flex: 0.7, height: 450, width: Dimensions.get('window').width, justifyContent: 'center' }}
        provider={PROVIDER_GOOGLE}
        zoomEnabled={true}
        zoomControlEnabled={true}
        showsUserLocation={true}
        followsUserLocation={true}
        region={this.state.position}
        /*  onRegionChange={this.onRegionChange} */
        > 
        
{/*         {
          
          this.props.dataSource.map((location, index) => {
            const {
              coords: { latitude, longitude }
            } = location;
            return (
              <MapView.Marker
              key={index}
              coordinate={{ latitude, longitude }}
              title={"title"}
              description={"address"}
              />
              )
            })
          } */}
        
          </MapView>
          
          <Button 
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
      
      