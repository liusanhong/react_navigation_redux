'use strict';

/**
 * @Author: lq
 * @Date: 2019-05-07
 * @Project:rn_navigation_redux
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import NavigationUtil from "../../navigator/NavigationUtil";

const TAG = 'HomePage';

class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(TAG, 'this.props::', this.props);
	}

	render() {
		let {navigation} = this.props;
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>HomePage</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('DetailPage');
					}}
					style={{marginTop: 20}}
				>
					<Text
						style={{color: 'red'}}>Go to DetailPage </Text>
				</TouchableOpacity>

			</View>
		)
	}

}

export default connect(
	({
		 nav
	 }) => ({
		nav
	})
)(HomePage)