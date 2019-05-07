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
// import SplashScreen from "react-native-splash-screen";

class InitPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.onThemeInit();
		this.timer = setTimeout(() => {
			// SplashScreen.hide();
			NavigationUtil.resetToHomPage({
				navigation: this.props.navigation
			})
		}, 200);
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	render() {
		return null
	}

}


export default connect(
	({
		 nav
	 })=>({
		nav
	})
)(InitPage)