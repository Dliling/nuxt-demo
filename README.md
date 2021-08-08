# nuxt-demo

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## components
```
<svg-icon icon-class="logo"></svg-icon>
```
### element-ui import on-demand(https://element.eleme.io/#/zh-CN/component/quickstart)
```
npm i babel-plugin-component -D
```
Then, modify nuxt.config.js
```
module.exports = {
  build: {
    babel: {
      plugins: [
        ...,
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  }
}
```
### local mock
Based on the last path of your request URL, create a json with the same name under server/mock.
```
nodemon server/index.js
```

### customize the title information of each page
pages/About.vue is an example.
