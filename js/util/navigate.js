'use strict';

import store from '../store';
import {NavigationActions} from 'react-navigation';

/**
 * 路由跳转
 * let toIndex = this.props.nav.index;  要跳第几层，减去几。。。
 *
 * @param routeName
 * @param params
 */
let debounce = true;
let name = '';

let navigate = (routeName, params={},) => {

	if (debounce || name !== routeName ) {
		name = routeName;
		debounce = false;
		setTimeout(
			() => {
				debounce = true;
			},
			700,
		);
		if(routeName === "GO_BACK"){
				store.dispatch(NavigationActions.back({
					key:null
				}));
		}else{
        store.dispatch(NavigationActions.navigate({
            routeName,
            params,
        }));
		}
	}
};

export default navigate;
