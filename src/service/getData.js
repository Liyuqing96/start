import fetch  from '../config/fetch'
import axios from 'axios'
import {getStore} from '../config/mUtils'

/**
 * 获取首页默认地址
 */
// export const guessCity = () => fetch('/v1/cities', {
// 	type: 'guess'
// });

/**
 * 获取首页默认地址（尝试axios获取）
 */
export const guessCity = () => axios({
	method : "get",
	url: "/v1/cities",
	params: {
		type: "guess",
	}
})

/**
 * 获取首页热门城市
 */
export const hotCity = () => fetch('/v1/cities', {
	type: 'hot'
});


/**
 * 获取首页所有城市
 */
export const allCity = () => fetch('/v1/cities', {
	type: 'group'
});

/**
 * 获取用户信息
 */
export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});
