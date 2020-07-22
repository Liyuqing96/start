const express = require('express')
const proxy = require('express-http-proxy')
const server = express()
const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const serverBundle = require(path.resolve(
  __dirname,
  '../dist/vue-ssr-server-bundle.json'
))
const clientBundle = require(path.resolve(
  __dirname,
  '../dist/vue-ssr-client-manifest.json'
))
const template = fs.readFileSync(
  path.resolve(__dirname, '../dist/index.ssr.html'),
  'utf-8'
)

const renderer = createBundleRenderer(serverBundle, {
  // runInNewContext: false,
  template: template,
  clientManifest: clientBundle
})
server.use(express.static(path.resolve(__dirname, '../dist/js')))

//设置允许跨域访问该服务.
// server.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   // res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });

server.get('*', (req, res) => {
  const context = { url: req.url }
  const ssrStream = renderer.renderToStream(context)
  let buffers = []
  ssrStream.on('error', err => {
    console.log(err)
  })
  ssrStream.on('data', data => {
    buffers.push(data)
  })
  ssrStream.on('end', () => {
    res.end(Buffer.concat(buffers))
  })
})
//http://cangdu.org:8001
server.use(
  '/v1',
  proxy('http://cangdu.org:8001', {
    proxyReqPathResolver: function(req) {
      return '/v1' + req.url
    }
  })
)

server.listen(1000, function() {
  console.log('127.0.0.1:1000  运行中')
})
