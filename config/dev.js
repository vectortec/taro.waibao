const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://xxx"'
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    // https://webpack.js.org/configuration/dev-server/#devserverproxy
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/api/': '/'
          },
          changeOrigin: true
        },
        '/tk/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/tk/': '/'
          },
          changeOrigin: true
        }
      }
    }
  }
}
