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
const TAG = 'MinePage';

class MinePage extends Component {
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
					style={{marginTop:50,left:50}}>MinePage</Text>
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
)(MinePage)