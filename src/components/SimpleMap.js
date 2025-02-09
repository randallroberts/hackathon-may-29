import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import restaurantData from '../filteredRestaurants.json';
import MarkerIcon from '../forkAndKnife.png'
 
const AnyReactComponent = ({ text }) => <div className="marker"><img width="20" src={MarkerIcon} /></div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     restaurants: JSON.parse(restaurantData)
    // }

    this.yelpAPIkey = "Bearer aY90oKFY8U9mMV4FQElCJWM9FfnGUAL8g6YHTqmHz_YTAKLSyLWu8Cm5_fZWnJkJ-ilP44m5Q6I0wGb7-AfAynWwbCJdvLDQ9z78g_ih_B2Yh212uB0-NktXNxXRXnYx";
    this.yelpClientID = "ibePwniubhz5jzxvMc8xZA";
  }

  static defaultProps = {
    center: {
      lat: 43.68,
      lng: -79.48
    },
    zoom: 12
  };

  componentDidMount() {

    console.log(restaurantData);
    //this.getRestaurants();
  }
    
  

  getRestaurants () {

    // let instance = axios.create({
    //   baseURL: "https://api.yelp.com/v3",
    //   timeout: 1000
    // });

    //instance.get(`/businesses/search`, {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
      params: {
        // term: 
        //open_now:
        //pricing:
        latitude: 43.68,
        longitude: -79.48,
        radius: 5000
      },
      headers: {
        'Authorization': this.yelpAPIkey
      }
    })
    .then( response => {
      this.setState({
        restaurants: response.data.businesses
      }, () => console.log(this.state.restaurants)) 
    })
    .catch(error => {
      console.log(error);
    });
    
    // let instance = axios.create({
    //   baseURL: "https://developers.zomato.com",
    //   timeout: 5000
    // });

    // instance.get(`/api/v2.1/search`, {
    //   params: {
    //     lat: 43.68,
    //     lng: -79.48,
    //     radius: 5000
    //   },
    //   headers: {
    //     'user-key': '0957425143b2be9ff4910e7ba00ef1ec'
    //   }
    // })
    // .then( response => {
    //   this.setState({
    //     restaurants: response.data.restaurants
    //   }, () => console.log(this.state.restaurants)) 
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    
  }

  getMarkers() {

    // return <AnyReactComponent
    //   lat={restaurantData[0].latitude}
    //   lng={restaurantData[0].longitude}
    //   text={restaurantData[0].name}
    // />

    if (restaurantData) {
      return restaurantData.splice(0,50).map((restaurant, key) => {
        
        return (
          <AnyReactComponent
            key={key}
            lat={restaurant.latitude}
            lng={restaurant.longitude}
            text={restaurant.name}
          />
          
        )
      })
    }
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD84RcMdhG8eJ4rzRooEivDe4KXGxLNIHQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          layerTypes={['TrafficLayer', 'TransitLayer']}
        >
          {this.getMarkers()}
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;