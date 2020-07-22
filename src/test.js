const render = require('vue-server-renderer')
const Vue = require('vue');
const app = new Vue({
  template: '<h1>title-{{num}}</h1>',
  data: {
    num: 123
  }
});
const renderer = render.createRenderer();
renderer.renderToString(app).then(html => {
  console.log(html)
})
