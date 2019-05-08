'use strict';

/**
 * @Author: lq
 * @Date: 2019-05-07
 * @Project:rn_navigation_redux
 */

import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import {connect} from 'react-redux';

const TAG = 'DetailPage';

class DetailPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(TAG, 'this.props:::', this.props);
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text
					onPress={() => {
						this.props.navigation.goBack();
					}}
					style={{color: 'red'}}
				>GO Back </Text>
				<Text style={{marginTop: 20}}>Detail Page</Text>
			</View>
		)
	}

}

export default connect(({
	                        nav
                        }) => ({
	nav
}))(DetailPage)
