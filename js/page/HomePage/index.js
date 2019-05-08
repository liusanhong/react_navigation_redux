'use strict';

/**
 * @Author: lq
 * @Date: 2019-05-07
 * @Project:rn_navigation_redux
 */

import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import {connect} from 'react-redux';
import NavigationUtil from "../../navigator/NavigationUtil";
const TAG = 'HomePage';

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(TAG,'this.props::',this.props);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<Text
					onPress={()=>{
						console.log('Text::');
						NavigationUtil.resetToHomPage(this.props)
						// this.props.navigation.actions.navigate('DetailPage')
						NavigationUtil.goPage('DetailPage')
					}}
					style={{marginTop:50,left:50,color:'red'}}>HomePage</Text>
			</View>
		)
	}

}


export default connect(
	({
		 nav
	 })=>({
		nav
	})
)(HomePage)