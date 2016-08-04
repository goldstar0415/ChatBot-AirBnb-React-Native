import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class EachNav extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(<View style={{flexDirection:'row'}}>
    	<Icon name ={this.props.icon} size={25} color="#333" style={{ margin:15}} />
    	<Text style = {{fontSize:15, fontWeight:'300', margin:15}}>{this.props.children}</Text>
    	</View>)
  }


}

