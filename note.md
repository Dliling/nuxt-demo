#### nuxt2.5.13启动警告：hough the "loose" option was set to "false" in your @babel/preset-env config, it will not be used for @babel/plugin-proposal-private-property-in-object since the "loose" mode option was set to "true" for @babel/plugin-proposal-private-methods.
##### 解决方法：
```
// nuxt.config.js
module.exports = {
    ...
    build: {
        babel: {
            plugins: [
                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
            ]
        }
    }
}
```
不知道为何在babelrc中写不行？
