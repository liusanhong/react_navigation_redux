'use strict';

import React, {Component} from 'react';
import {Text, View, Image,Animated} from 'react-native';

class TabIcon extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let imageSource = {
            home : {normal: require('../images/tab/home.png'), selected: require('../images/tab/home_select.png')},
            mine : {normal: require('../images/tab/mine.png'), selected: require('../images/tab/mine_select.png')},
        };

        let imageType = this.props.focused ? 'selected' : 'normal';
        let source = imageSource[this.props.inx][imageType];


	    return (
			<View style={{flexDirection: 'column',justifyContent : 'center',alignItems: 'center',paddingTop:isIphoneX()?5:0}}>
                {this.props.focused ?<Animated.Image source={source}
                                style={{width:24, height:24,}}
                                resizeMode="contain"/>:
                                <Image source={source} style={{width:24,height:24,}} resizeMode="contain"/>}
				<Text style={{marginTop: 2, color: this.props.focused ? '#333' :'#a4a7ba',fontSize:10}}>{this.props.title}</Text>
			</View>
        )
    }
}

module.exports = TabIcon;
