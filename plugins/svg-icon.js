/**
 * @file svg-icon plugin
 */
// 无需注册注册组件，components下的组件会自动注册
//预请求svg组件(通过之前的nuxt-svg-sprite-loader加载)
const req = require.context('@/assets/svgs', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
