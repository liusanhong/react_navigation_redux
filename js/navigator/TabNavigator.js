'use strict';

/**
 * @Author: lq
 * @Date: 2019-05-08
 * @Project:rn_navigation_redux
 */
import React from 'react';
import {Image,Platform} from "react-native";
import {TabNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';


const Tab = createBottomTabNavigator({
	HomePage: {
		screen: HomePage,
		navigationOptions : {
			tabBarLabel: '首页',
			tabBarIcon: ({ tintColor, focused }) => (
				<Image
					source={focused?require('../images/tab/home_select.png'):require('../images/tab/home.png')}
					style={[{width:24,height:24,}]}
				/>
			),
		},

	},
	DetailPage: {
		screen: DetailPage,
		navigationOptions : {
			tabBarLabel: '我的',
			tabBarIcon: ({ tintColor, focused }) => (
				<Image
					source={focused?require('../images/tab/mine_select.png'):require('../images/tab/mine.png')}
					style={[{width:24,height:24,}]}
				/>
			),
		},
	},
}, {
	tabBarPosition: 'top',
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#222',
	},
});



export default createAppContainer(Tab)