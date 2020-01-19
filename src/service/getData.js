import fetch  from '../config/fetch'

/**
 * 获取首页默认地址
 */
export const guessCity = () => fetch('/v1/cities', {
	type: 'guess'
});


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
